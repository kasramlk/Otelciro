"use client";

import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import gsap from "gsap";

// A single orbiting object
function Orb({
  name,
  position,
  color,
}: {
  name: string;
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((_state, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : color} />
      </mesh>
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        visible={hovered}
      >
        {name}
      </Text>
    </group>
  );
}

// The complete ecosystem model
export function EcosystemModel() {
  const groupRef = useRef<THREE.Group>(null!);
  const { camera, viewport } = useThree();
  const timeline = useRef<gsap.core.Timeline>(null);

  useLayoutEffect(() => {
    const isMobile = viewport.width < 4;

    if (groupRef.current) {
      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".page-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Animate the orbs to their final positions
      groupRef.current.children.forEach((child) => {
        if (child.name !== "core") {
          const finalPos = child.position.clone();
          child.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          );
          timeline.current?.to(child.position, {
            x: finalPos.x,
            y: finalPos.y,
            z: finalPos.z,
            duration: 2
          }, "assembly");
        }
      });

      const modelScale = isMobile ? 0.7 : 1;
      const cameraZ = isMobile ? 4 : 2.5;

      timeline.current
        .to(camera.position, { z: cameraZ, duration: 1.5 }, 0)
        .to(groupRef.current.scale, { x: modelScale, y: modelScale, z: modelScale, duration: 2 }, 0)
        .to(groupRef.current.rotation, { y: Math.PI * 2, duration: 4 }, 0);

      const finaleCamZ = isMobile ? 8 : 6;
      timeline.current
        .to(camera.position, { x: 2, z: 4, duration: 2 }, "analysis_start")
        .to(camera.position, { x: -2, z: 4, duration: 2 }, "strategy_start")
        .to(camera.position, { x: 0, y: 0, z: 5, duration: 2 }, "tiers_start")
        .to(camera.position, { x: 0, y: 1, z: finaleCamZ, duration: 2 }, "guarantee_start");
    }
  }, [viewport, camera.position, groupRef]);

  return (
    <group ref={groupRef}>
      <mesh name="core">
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        OtelCiro Ecosystem
      </Text>
      <Orb name="Mini-GDS" position={[2, 0, 0]} color="lightgreen" />
      <Orb name="Channel Manager" position={[-2, 0, 0]} color="coral" />
      <Orb name="Social Media Kit" position={[0, 2, 0]} color="skyblue" />
      <Orb name="Revenue AI" position={[0, -2, 0]} color="mediumpurple" />
      <Orb name="Guest CRM" position={[0, 0, 2]} color="gold" />
      <Orb name="Automation Engine" position={[0, 0, -2]} color="hotpink" />
    </group>
  );
}