'use client'

import { useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
    const { viewport, mouse } = useThree()
    const count = 90

    const { geo, velocities, lineGeom, pointsMesh, linesMesh } = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const velocities = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            positions[i * 3]     = (Math.random() - 0.5) * 20
            positions[i * 3 + 1] = (Math.random() - 0.5) * 12
            positions[i * 3 + 2] = (Math.random() - 0.5) * 6
            velocities[i * 3]     = (Math.random() - 0.5) * 0.01
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01
        }

        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        const lineGeom = new THREE.BufferGeometry()

        const pointsMesh = new THREE.Points(
            geo,
            new THREE.PointsMaterial({ size: 0.06, color: '#6366f1', transparent: true, opacity: 0.9, sizeAttenuation: true })
        )
        const linesMesh = new THREE.LineSegments(
            lineGeom,
            new THREE.LineBasicMaterial({ color: '#22d3ee', transparent: true, opacity: 0.15 })
        )

        return { geo, velocities, lineGeom, pointsMesh, linesMesh }
    }, [])

    useFrame(() => {
        const posAttr = geo.attributes.position as THREE.BufferAttribute
        const arr = posAttr.array as Float32Array

        const mx = (mouse.x * viewport.width) / 2
        const my = (mouse.y * viewport.height) / 2

        for (let i = 0; i < count; i++) {
            arr[i * 3]     += velocities[i * 3]
            arr[i * 3 + 1] += velocities[i * 3 + 1]
            arr[i * 3 + 2] += velocities[i * 3 + 2]

            if (arr[i * 3] > 10    || arr[i * 3] < -10)    velocities[i * 3] *= -1
            if (arr[i * 3 + 1] > 6 || arr[i * 3 + 1] < -6) velocities[i * 3 + 1] *= -1
            if (arr[i * 3 + 2] > 3 || arr[i * 3 + 2] < -3) velocities[i * 3 + 2] *= -1

            const dx = arr[i * 3] - mx
            const dy = arr[i * 3 + 1] - my
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 2.5 && dist > 0) {
                arr[i * 3]     += (dx / dist) * 0.05
                arr[i * 3 + 1] += (dy / dist) * 0.05
            }
        }
        posAttr.needsUpdate = true

        const linePositions: number[] = []
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = arr[i * 3] - arr[j * 3]
                const dy = arr[i * 3 + 1] - arr[j * 3 + 1]
                const dz = arr[i * 3 + 2] - arr[j * 3 + 2]
                const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
                if (d < 2.2) {
                    linePositions.push(
                        arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2],
                        arr[j * 3], arr[j * 3 + 1], arr[j * 3 + 2]
                    )
                }
            }
        }
        lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
        if (lineGeom.attributes.position) lineGeom.attributes.position.needsUpdate = true
    })

    return (
        <>
            {/* @ts-ignore */}
            <primitive object={pointsMesh} />
            {/* @ts-ignore */}
            <primitive object={linesMesh} />
        </>
    )
}

export default function ParticleField() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
        >
            <Particles />
        </Canvas>
    )
}