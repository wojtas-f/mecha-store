'use client';

import React from 'react'
import { Canvas, useThree } from '@react-three/fiber';

const Scene = () => {
  return (
    <Canvas>
        <directionalLight position={[-5, -5, 5]} intensity={4} />
    </Canvas>
  )
}

export default Scene