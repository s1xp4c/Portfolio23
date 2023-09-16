import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const EARTH_MODEL_SCENE = "./planet/scene.gltf";
// Preload the model here
useGLTF.preload(EARTH_MODEL_SCENE);

const Earth = () => {
  const { scene } = useGLTF(EARTH_MODEL_SCENE);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh && child.BufferGeometry) {
          if (child.BufferGeometry.attributes.position) {
            child.BufferGeometry.computeBoundingBox();

            // Check for NaN values in the position array
            const positionArray = child.BufferGeometry.attributes.position.array;
            const hasNaNValues = positionArray.some((value) => isNaN(value));

            if (!hasNaNValues) {
              child.BufferGeometry.boundingSphere = new THREE.Sphere();
              const points = [];
              for (let i = 0; i < positionArray.length; i += 3) {
                points.push(
                  new THREE.Vector3(
                    positionArray[i],
                    positionArray[i + 1],
                    positionArray[i + 2]
                  )
                );
              }
              child.BufferGeometry.boundingSphere.setFromPoints(points);
            } else {
              // Replace the geometry with a simple sphere if the position array contains NaN values
              const radius = 1;
              const widthSegments = 32;
              const heightSegments = 32;
              const geometry = new THREE.BufferGeometry(
                radius,
                widthSegments,
                heightSegments
              );
              child.BufferGeometry.dispose();
              child.BufferGeometry = geometry;
            }
          }
        }
      });
    }
  }, [scene]);

  return <primitive object={scene} scale={2.5} position={[0.6, -0.4, 0]} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      className="cursor-move"
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
