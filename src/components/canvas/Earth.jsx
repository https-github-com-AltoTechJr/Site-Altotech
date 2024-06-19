import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet_earth/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.3} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        {/* Add lights to the scene */}
        <hemisphereLight intensity={0.35} groundColor="black" />
        <spotLight
          position={[10, 20, 10]}
          angle={0.25}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
