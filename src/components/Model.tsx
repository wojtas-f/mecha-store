import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

useGLTF.preload("mecha/full_mecha.glb");

const Model = () => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("mecha/full_mecha.glb");

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
