import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import PropTypes from "prop-types";
import * as THREE from "three";

const COMPUTERS_MODEL_PATH = "./desktop_pc/scene.gltf";
// Preload the model here
useGLTF.preload(COMPUTERS_MODEL_PATH);

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
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -1.5, -1.15] : [0, -2.4, -1.5]}
        rotation={isMobile ? [-0.05, -0.8, -0.15] : [-0.01, -0.2, -0.1]}
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

    const handleOrientationChange = () => {
      switch (screen.orientation.type) {
        case "landscape-primary":
          setIsMobile(false);
          break;
        case "landscape-secondary":
          setIsMobile(false);
          break;
        case "portrait-secondary":
        case "portrait-primary":
          setIsMobile(true);
          break;
        default:
          setIsMobile(false);
      }
    };

    
    const handleScreenSizeChange = () => {
      
       if (window.screen.availWidth < 500) {
         // Width is below 500px and then isMobile
         setIsMobile(true);
       }
       else {
        setIsMobile(false);
       }
    };
    

    handleOrientationChange(); 
    handleScreenSizeChange(); 

    screen.orientation.addEventListener("change", handleOrientationChange);
    window.addEventListener("change", handleScreenSizeChange);

    return () => {
      screen.orientation.removeEventListener("change", handleOrientationChange);
      window.removeEventListener("change", handleScreenSizeChange);
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
