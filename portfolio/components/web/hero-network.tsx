"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

interface Node {
    xNorm: number
    yNorm: number
    zNorm: number
    radius: number
    dispX: number
    dispY: number
}

export function HeroNetwork() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
        x: -1000,
        y: -1000,
        active: false,
    })

    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let width = 0
        let height = 0
        let dpr = 1

        const updateDimensions = () => {
            if (!container || !canvas) return
            dpr = window.devicePixelRatio || 1
            width = container.clientWidth
            height = container.clientHeight

            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.scale(dpr, dpr)
        }

        updateDimensions()

        const resizeObserver = new ResizeObserver(() => {
            updateDimensions()
        })
        resizeObserver.observe(container)

        // Mouse interaction handlers
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true,
            }
        }

        const handleMouseLeave = () => {
            mouseRef.current.active = false
        }

        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseleave", handleMouseLeave)

        // Generate network nodes with displacement tracking
        const nodeCount = 95
        const nodes: Node[] = []

        for (let i = 0; i < nodeCount; i++) {
            const xNorm = (Math.random() - 0.5) * 1.35
            const yNorm = (Math.random() - 0.5) * 0.75
            const zNorm = (Math.random() - 0.5) * 0.5

            nodes.push({
                xNorm,
                yNorm,
                zNorm,
                radius: Math.random() > 0.75 ? 3.2 : 2.0,
                dispX: 0,
                dispY: 0,
            })
        }

        let angleY = 0
        let angleX = 0.15

        const render = () => {
            if (width === 0 || height === 0) return
            ctx.clearRect(0, 0, width, height)

            const isDark = document.documentElement.classList.contains("dark")
            const colorRgb = isDark ? "245, 245, 243" : "14, 15, 17"

            const centerX = width / 2
            const centerY = height / 2 + 15
            const repulsionRadius = 125 // Mouse influence radius (compact area)

            angleY += 0.0015

            // Project 3D nodes to 2D screen coordinates with smooth mouse repulsion
            const projectedNodes = nodes.map((node) => {
                const nx = node.xNorm * width
                const ny = node.yNorm * height
                const nz = node.zNorm * Math.min(width, height)

                const cosY = Math.cos(angleY)
                const sinY = Math.sin(angleY)
                let x1 = nx * cosY - nz * sinY
                let z1 = nz * cosY + nx * sinY

                const cosX = Math.cos(angleX)
                const sinX = Math.sin(angleX)
                let y2 = ny * cosX - z1 * sinX
                let z2 = z1 * cosX + ny * sinX

                const scale = 700 / (700 + z2)
                const baseScreenX = centerX + x1 * scale
                const baseScreenY = centerY + y2 * scale

                // Calculate repulsion displacement from cursor
                let targetDispX = 0
                let targetDispY = 0

                if (mouseRef.current.active) {
                    const dx = baseScreenX - mouseRef.current.x
                    const dy = baseScreenY - mouseRef.current.y
                    const dist = Math.hypot(dx, dy)

                    if (dist < repulsionRadius && dist > 0) {
                        const force = Math.pow(1 - dist / repulsionRadius, 2) * 55
                        const angle = Math.atan2(dy, dx)
                        targetDispX = Math.cos(angle) * force
                        targetDispY = Math.sin(angle) * force
                    }
                }

                // Elastic spring interpolation back to original position
                node.dispX += (targetDispX - node.dispX) * 0.12
                node.dispY += (targetDispY - node.dispY) * 0.12

                const finalX = baseScreenX + node.dispX
                const finalY = baseScreenY + node.dispY

                return {
                    screenX: finalX,
                    screenY: finalY,
                    z: z2,
                    scale,
                    radius: node.radius * scale,
                }
            })

            const maxDistance = Math.max(130, Math.min(240, width * 0.14))

            for (let i = 0; i < projectedNodes.length; i++) {
                for (let j = i + 1; j < projectedNodes.length; j++) {
                    const n1 = projectedNodes[i]
                    const n2 = projectedNodes[j]
                    const dx = n1.screenX - n2.screenX
                    const dy = n1.screenY - n2.screenY
                    const dist = Math.hypot(dx, dy)

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * 0.42
                        ctx.beginPath()
                        ctx.moveTo(n1.screenX, n1.screenY)
                        ctx.lineTo(n2.screenX, n2.screenY)

                        if ((i + j) % 5 === 0) {
                            ctx.setLineDash([3, 3])
                            ctx.strokeStyle = `rgba(${colorRgb}, ${alpha * 0.7})`
                            ctx.lineWidth = 0.8
                        } else {
                            ctx.setLineDash([])
                            ctx.strokeStyle = `rgba(${colorRgb}, ${alpha})`
                            ctx.lineWidth = 1
                        }

                        ctx.stroke()
                    }
                }
            }

            projectedNodes.forEach((node) => {
                ctx.beginPath()
                ctx.arc(node.screenX, node.screenY, Math.max(1, node.radius), 0, Math.PI * 2)
                const alpha = Math.min(1, Math.max(0.2, (node.z + 200) / 400))
                ctx.fillStyle = `rgba(${colorRgb}, ${alpha})`
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            container.removeEventListener("mousemove", handleMouseMove)
            container.removeEventListener("mouseleave", handleMouseLeave)
            resizeObserver.disconnect()
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative w-full h-[45vh] min-h-[300px] overflow-hidden select-none animate-fade-in delay-300">
            {/* Gradient fade overlay dynamically adapting to theme card background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card via-card/60 to-transparent z-10 pointer-events-none h-40 transition-colors duration-300" />
            
            <canvas 
                ref={canvasRef} 
                className="w-full h-full block cursor-default"
            />
        </div>
    )
}
