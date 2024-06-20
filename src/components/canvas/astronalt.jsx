import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Astronaut = ({ isMobile }) => {
  const astronaut = useGLTF("./astronaut/scene.gltf");
  const [hovered, setHovered] = useState(false);
  const [positionY, setPositionY] = useState(0);

  // Animation parameters
  const amplitude = 0.4; // Amplitude of the floating animation
  const frequency = 1; // Frequency of the floating animation

  // Update the position of the object on each frame
  useFrame((state) => {
    // Calculate new position based on sine wave
    const time = state.clock.elapsedTime;
    const newY = Math.sin(time * frequency) * amplitude;
    setPositionY(newY);
  });

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={astronaut.scene}
        scale={isMobile ? 2.5 : 2.6}
        position={isMobile ? [0, -4 + positionY, -1.5] : [0, -4.5 + positionY, -0.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const AstronautCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Astronaut isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AstronautCanvas;
