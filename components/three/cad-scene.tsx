"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function WireAssembly() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = state.clock.elapsedTime * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
  });

  return (
    <group ref={group} scale={1.15}>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#4db5ff" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[2.15, 0.04, 16, 100]} />
        <meshBasicMaterial color="#ff7a18" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0.3, 1.2, 0.7]}>
        <torusGeometry args={[2.85, 0.035, 16, 100]} />
        <meshBasicMaterial color="#93a4b8" wireframe />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3.7, 3.7, 3.7)]} />
        <lineBasicMaterial color="#93a4b8" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

export default function CadScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.8], fov: 45 }}>
      <color attach="background" args={["#05070b"]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 5, 6]} intensity={16} color="#4db5ff" />
      <pointLight position={[-5, -3, 4]} intensity={9} color="#ff7a18" />
      <WireAssembly />
    </Canvas>
  );
}
