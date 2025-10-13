"use client";

import { OrbitControls } from "@react-three/drei";
import { EcosystemModel } from "./EcosystemModel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} intensity={2.5} />
      <EcosystemModel />
    </>
  );
};