"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Scene = () => {
  return (
    <Canvas>
      {/* <directionalLight position={[-5, -5, 5]} intensity={4} /> */}
      <ambientLight />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
