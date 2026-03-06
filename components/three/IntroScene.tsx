"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type IntroSceneProps = {
  elapsedMs: number;
  totalMs: number;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function phaseProgress(time: number, start: number, end: number) {
  return clamp((time - start) / (end - start));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function RocketModel({
  wireOpacity,
  solidOpacity,
  detailOpacity,
  panelLineOpacity,
}: {
  wireOpacity: number;
  solidOpacity: number;
  detailOpacity: number;
  panelLineOpacity: number;
}) {
  const noseGeometry = useMemo(() => {
    const profile: THREE.Vector2[] = [];
    const height = 0.72;
    const radius = 0.205;

    for (let i = 0; i <= 24; i += 1) {
      const t = i / 24;
      const y = t * height;
      const r = radius * Math.pow(Math.sin((t * Math.PI) / 2), 1.35);
      profile.push(new THREE.Vector2(Math.max(0.0001, r), y));
    }

    return new THREE.LatheGeometry(profile, 40);
  }, []);

  useEffect(() => {
    return () => {
      noseGeometry.dispose();
    };
  }, [noseGeometry]);

  return (
    <group>
      <mesh position={[0, 0.74, 0]}>
        <cylinderGeometry args={[0.218, 0.232, 1.55, 36]} />
        <meshStandardMaterial color="#b9c1c9" metalness={0.56} roughness={0.43} transparent opacity={solidOpacity} />
      </mesh>

      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.2, 0.218, 0.27, 32]} />
        <meshStandardMaterial color="#aeb7c0" metalness={0.46} roughness={0.48} transparent opacity={solidOpacity} />
      </mesh>

      <mesh position={[0, 1.9, 0]} geometry={noseGeometry}>
        <meshStandardMaterial color="#d0d7dd" metalness={0.42} roughness={0.36} transparent opacity={solidOpacity} />
      </mesh>

      <mesh position={[0, 1.54, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.205, 0.0022, 10, 40]} />
        <meshStandardMaterial color="#7f8a97" metalness={0.28} roughness={0.62} transparent opacity={panelLineOpacity} />
      </mesh>

      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.223, 0.005, 10, 48]} />
        <meshStandardMaterial color="#8893a0" metalness={0.3} roughness={0.68} transparent opacity={detailOpacity} />
      </mesh>

      {[-0.16, 0.16].map((x) => (
        <mesh key={`hatch-${x}`} position={[x, 0.64, 0.17]} rotation={[0.18, 0, 0]}>
          <cylinderGeometry args={[0.038, 0.038, 0.005, 24]} />
          <meshStandardMaterial color="#7e8996" metalness={0.2} roughness={0.74} transparent opacity={detailOpacity} />
        </mesh>
      ))}

      <mesh position={[0.214, 0.82, 0]}>
        <boxGeometry args={[0.004, 1.15, 0.004]} />
        <meshStandardMaterial color="#707c8a" metalness={0.24} roughness={0.66} transparent opacity={panelLineOpacity} />
      </mesh>

      {[0.03, 0.63, 1.14].map((y) => (
        <mesh key={`panel-${y}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.22, 0.0017, 8, 40]} />
          <meshStandardMaterial color="#6f7b88" metalness={0.22} roughness={0.7} transparent opacity={panelLineOpacity} />
        </mesh>
      ))}

      <mesh position={[0, -0.52, 0]}>
        <cylinderGeometry args={[0.16, 0.22, 0.34, 32]} />
        <meshStandardMaterial color="#4f5862" metalness={0.24} roughness={0.74} transparent opacity={detailOpacity} />
      </mesh>

      {[
        [0.215, -0.36, 0, 0],
        [-0.215, -0.36, 0, 0],
        [0, -0.36, 0.215, Math.PI / 2],
        [0, -0.36, -0.215, Math.PI / 2],
      ].map(([x, y, z, ry], index) => (
        <group key={`fin-${index}`} position={[x as number, y as number, z as number]} rotation={[0, ry as number, 0]}>
          <mesh position={[0, -0.1, 0]} rotation={[0, 0, 0.24 * ((x as number) < 0 || (z as number) < 0 ? -1 : 1)]}>
            <boxGeometry args={[0.12, 0.62, 0.032]} />
            <meshStandardMaterial color="#64707d" metalness={0.12} roughness={0.86} transparent opacity={detailOpacity} />
          </mesh>
          <mesh position={[0, -0.1, 0.018]} rotation={[0, 0, 0.24 * ((x as number) < 0 || (z as number) < 0 ? -1 : 1)]}>
            <boxGeometry args={[0.122, 0.014, 0.007]} />
            <meshStandardMaterial color="#cfd6dd" metalness={0.28} roughness={0.52} transparent opacity={detailOpacity} />
          </mesh>
        </group>
      ))}

      {[[-0.1, -0.73, 0], [0.1, -0.73, 0], [0, -0.73, 0.1]].map(([x, y, z], index) => (
        <mesh key={`bell-${index}`} position={[x as number, y as number, z as number]}>
          <cylinderGeometry args={[0.052, 0.09, 0.29, 24]} />
          <meshStandardMaterial color="#353b43" metalness={0.34} roughness={0.7} transparent opacity={detailOpacity} />
        </mesh>
      ))}

      <mesh position={[0, -0.57, 0]}>
        <cylinderGeometry args={[0.03, 0.062, 0.13, 20]} />
        <meshStandardMaterial color="#5f6873" metalness={0.24} roughness={0.68} transparent opacity={detailOpacity} />
      </mesh>

      <mesh position={[0, 0.74, 0.0018]}>
        <cylinderGeometry args={[0.218, 0.232, 1.55, 22]} />
        <meshBasicMaterial color="#9de2ff" wireframe transparent opacity={wireOpacity} />
      </mesh>
      <mesh position={[0, -0.12, 0.0018]}>
        <cylinderGeometry args={[0.2, 0.218, 0.27, 20]} />
        <meshBasicMaterial color="#9de2ff" wireframe transparent opacity={wireOpacity} />
      </mesh>
      <mesh position={[0, 1.9, 0.0018]} geometry={noseGeometry}>
        <meshBasicMaterial color="#9de2ff" wireframe transparent opacity={wireOpacity} />
      </mesh>
      <mesh position={[0, -0.52, 0.0018]}>
        <cylinderGeometry args={[0.16, 0.22, 0.34, 22]} />
        <meshBasicMaterial color="#9de2ff" wireframe transparent opacity={wireOpacity} />
      </mesh>
    </group>
  );
}

function IntroWorld({ elapsedMs, totalMs }: IntroSceneProps) {
  const paperRef = useRef<THREE.Mesh>(null);
  const cadGroupRef = useRef<THREE.Group>(null);
  const realGroupRef = useRef<THREE.Group>(null);
  const plumeCoreRef = useRef<THREE.Mesh>(null);
  const plumeGlowRef = useRef<THREE.Mesh>(null);
  const plumeHazeRef = useRef<THREE.Mesh>(null);
  const ignitionRef = useRef<THREE.Mesh>(null);
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.DirectionalLight>(null);
  const deskLightRef = useRef<THREE.PointLight>(null);

  const { camera, scene } = useThree();

  const blueprintTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 768;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return new THREE.CanvasTexture(canvas);
    }

    ctx.fillStyle = "#dbe4ef";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const warmDesk = ctx.createRadialGradient(780, 170, 80, 500, 360, 720);
    warmDesk.addColorStop(0, "rgba(255,240,210,0.28)");
    warmDesk.addColorStop(1, "rgba(255,240,210,0)");
    ctx.fillStyle = warmDesk;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(26,87,133,0.19)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 24) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "rgba(32,93,139,0.36)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(220, 570);
    ctx.lineTo(820, 570);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(280, 180);
    ctx.lineTo(280, 670);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(760, 180);
    ctx.lineTo(760, 670);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  const drawingGeometry = useMemo(() => {
    const points = [
      [-0.72, 2.15, 0.02],
      [-0.61, 1.82, 0.02],
      [-0.57, 1.28, 0.02],
      [-0.56, -0.16, 0.02],
      [-0.44, -0.57, 0.02],
      [-0.3, -0.9, 0.02],
      [-0.43, -1.18, 0.02],
      [-0.84, -1.18, 0.02],
      [-0.96, -0.9, 0.02],
      [-0.82, -0.57, 0.02],
      [-0.7, -0.16, 0.02],
      [-0.69, 1.28, 0.02],
      [-0.65, 1.82, 0.02],
      [-0.72, 2.15, 0.02],
    ].map((point) => new THREE.Vector3(point[0], point[1], point[2]));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometry.setDrawRange(0, 0);
    return geometry;
  }, []);

  const drawingMaterial = useMemo(
    () => new THREE.LineBasicMaterial({ color: "#95deff", transparent: true, opacity: 0.96 }),
    []
  );
  const drawingLine = useMemo(() => new THREE.Line(drawingGeometry, drawingMaterial), [drawingGeometry, drawingMaterial]);

  useEffect(() => {
    return () => {
      drawingGeometry.dispose();
      drawingMaterial.dispose();
    };
  }, [drawingGeometry, drawingMaterial]);

  useFrame((state) => {
    const t = Math.min(elapsedMs, totalMs);
    const draw = phaseProgress(t, 0, 1000);
    const cad = phaseProgress(t, 1000, 2200);
    const real = phaseProgress(t, 2200, 3200);
    const launch = phaseProgress(t, 3200, totalMs);

    const launchEase = easeOutCubic(launch);
    const shakeWindow = phaseProgress(t, 3220, 3420) * (1 - phaseProgress(t, 3420, 3560));

    const pointCount = drawingGeometry.attributes.position.count;
    drawingGeometry.setDrawRange(0, Math.max(2, Math.floor(pointCount * draw)));

    if (paperRef.current) {
      const mat = paperRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = clamp(1 - cad * 0.9);
      paperRef.current.rotation.x = -0.58 + cad * 0.1;
      paperRef.current.position.y = -0.35 + cad * 0.2;
      paperRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.04;
    }

    drawingMaterial.opacity = clamp((1 - cad * 1.1) * (1 - real * 0.35));

    if (cadGroupRef.current) {
      cadGroupRef.current.visible = t >= 850;
      cadGroupRef.current.position.set(0, -0.1 + cad * 0.36, 0.26);
      cadGroupRef.current.rotation.y = state.clock.elapsedTime * 0.56;
      cadGroupRef.current.rotation.x = 0.08 + Math.sin(state.clock.elapsedTime * 1.1) * 0.02;
    }

    if (realGroupRef.current) {
      const lift = launchEase * launchEase * 12;
      realGroupRef.current.visible = t >= 2050;
      realGroupRef.current.position.set(0, 0.24 + lift, 0.24 - launchEase * 0.82);
      realGroupRef.current.scale.setScalar(1 - launchEase * 0.14);
      realGroupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }

    if (plumeCoreRef.current) {
      const active = launch > 0.05 && launch < 0.98;
      plumeCoreRef.current.visible = active;
      plumeCoreRef.current.scale.set(1, 0.2 + launchEase * 3, 1);
      const mat = plumeCoreRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = clamp(0.54 - launchEase * 0.2 + Math.sin(state.clock.elapsedTime * 36) * 0.03);
    }

    if (plumeGlowRef.current) {
      const active = launch > 0.05 && launch < 0.98;
      plumeGlowRef.current.visible = active;
      plumeGlowRef.current.scale.set(1 + launchEase * 0.2, 0.26 + launchEase * 3.4, 1 + launchEase * 0.2);
      const mat = plumeGlowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = clamp(0.32 - launchEase * 0.13 + Math.sin(state.clock.elapsedTime * 28) * 0.025);
    }

    if (plumeHazeRef.current) {
      const active = launch > 0.08 && launch < 0.82;
      plumeHazeRef.current.visible = active;
      plumeHazeRef.current.scale.set(0.65 + launchEase * 0.35, 0.65 + launchEase * 0.35, 0.65 + launchEase * 0.35);
      const mat = plumeHazeRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = clamp(0.14 - launchEase * 0.08 + Math.sin(state.clock.elapsedTime * 22) * 0.02);
      plumeHazeRef.current.rotation.z += 0.03;
    }

    if (ignitionRef.current) {
      ignitionRef.current.visible = launch > 0.02 && launch < 0.25;
      ignitionRef.current.scale.setScalar(0.66 + launch * 1.28);
      const mat = ignitionRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = clamp(0.6 - launch * 1.7);
    }

    const warmBlend = clamp(real + launch * 0.65);

    if (deskLightRef.current) {
      deskLightRef.current.intensity = clamp(1.2 - cad * 0.9);
    }

    if (keyLightRef.current) {
      keyLightRef.current.intensity = 1 + warmBlend * 0.72;
      keyLightRef.current.color.setRGB(0.74 + warmBlend * 0.26, 0.86 - warmBlend * 0.2, 1 - warmBlend * 0.35);
    }

    if (rimLightRef.current) {
      rimLightRef.current.intensity = 0.38 + warmBlend * 0.3;
      rimLightRef.current.color.setRGB(0.54 + warmBlend * 0.24, 0.72 - warmBlend * 0.16, 0.94 - warmBlend * 0.4);
    }

    scene.background = new THREE.Color(0x071426).lerp(new THREE.Color(0x02060d), launchEase * 0.85);

    camera.position.set(
      Math.sin(state.clock.elapsedTime * 0.3) * 0.05,
      0.14 + cad * 0.25 - launchEase * 0.12,
      6.2 - cad * 0.2 - launchEase * 1.2
    );

    if (shakeWindow > 0) {
      const shake = 0.028 * shakeWindow;
      camera.position.x += (Math.random() - 0.5) * shake;
      camera.position.y += (Math.random() - 0.5) * shake;
    }

    camera.lookAt(0, 0.36 + launchEase * 1.4, 0.1);
  });

  const cadWireOpacity = clamp(phaseProgress(elapsedMs, 900, 2050) * (1 - phaseProgress(elapsedMs, 2200, 3000)));
  const realSolidOpacity = clamp(phaseProgress(elapsedMs, 2200, 3000));
  const detailOpacity = clamp(phaseProgress(elapsedMs, 2360, 3200));
  const panelLineOpacity = clamp(phaseProgress(elapsedMs, 2420, 3200));

  return (
    <>
      <ambientLight intensity={0.33} color="#9fb7d2" />
      <pointLight ref={deskLightRef} position={[1.2, 2.5, 2]} intensity={1.2} color="#ffe8c2" distance={8} decay={2} />
      <directionalLight ref={keyLightRef} position={[4.2, 5.3, 5.8]} intensity={1} color="#b5dcff" />
      <directionalLight ref={rimLightRef} position={[-4.8, 2.4, -4.2]} intensity={0.38} color="#8cb6ec" />

      <mesh ref={paperRef} position={[0, -0.35, -0.45]} rotation={[-0.58, 0.12, -0.02]}>
        <planeGeometry args={[7, 5]} />
        <meshStandardMaterial map={blueprintTexture} transparent opacity={1} roughness={0.9} metalness={0.02} />
      </mesh>

      <group position={[0.83, -0.42, -0.1]} rotation={[-0.58, 0.12, -0.02]}>
        <primitive object={drawingLine} />
      </group>

      <group ref={cadGroupRef}>
        <RocketModel wireOpacity={cadWireOpacity} solidOpacity={0} detailOpacity={0} panelLineOpacity={0} />
      </group>

      <group ref={realGroupRef}>
        <RocketModel wireOpacity={0} solidOpacity={realSolidOpacity} detailOpacity={detailOpacity} panelLineOpacity={panelLineOpacity} />

        <mesh ref={ignitionRef} position={[0, -0.83, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#ffb982" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>

        <mesh ref={plumeCoreRef} position={[0, -1.36, 0]}>
          <coneGeometry args={[0.19, 1.38, 16]} />
          <meshBasicMaterial color="#ffd3a6" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>

        <mesh ref={plumeGlowRef} position={[0, -1.43, 0]}>
          <coneGeometry args={[0.31, 1.88, 16]} />
          <meshBasicMaterial color="#ff9a4e" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>

        <mesh ref={plumeHazeRef} position={[0, -1.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.95, 0.95]} />
          <meshBasicMaterial color="#ffd9bd" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>
    </>
  );
}

export default function IntroScene({ elapsedMs, totalMs }: IntroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.18, 6.2], fov: 40 }}
      className="h-full w-full"
      frameloop="always"
    >
      <IntroWorld elapsedMs={elapsedMs} totalMs={totalMs} />
    </Canvas>
  );
}
