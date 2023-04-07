import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import PropTypes from "prop-types";
import * as THREE from "three";

const COMPUTERS_MODEL_PATH = "./desktop_pc/scene.gltf";

const Computers = ({ isMobile }) => {
  const computer = useGLTF(COMPUTERS_MODEL_PATH);

  useEffect(() => {
    if (computer?.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          if (child.geometry.attributes.position) {
            child.geometry.computeBoundingBox();
            child.geometry.boundingSphere = new THREE.Sphere();
            const points = [];
            for (let i = 0; i < child.geometry.attributes.position.count; i++) {
              points.push(
                new THREE.Vector3().fromBufferAttribute(
                  child.geometry.attributes.position,
                  i
                )
              );
            }
            child.geometry.boundingSphere.setFromPoints(points);
          }
        }
      });
    }
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="purple" />
      <spotLight
        position={[-20, 50, 20]}
        angle={0.14}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -2.4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className="cursor-move"
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
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
