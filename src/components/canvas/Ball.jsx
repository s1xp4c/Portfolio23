// components/canvas/Ball.jsx

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const onMeshCreated = (mesh) => {
    if (mesh.geometry) {
      mesh.geometry.computeBoundingBox();

      const positionArray = mesh.geometry.attributes.position.array;
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

      mesh.geometry.boundingSphere = new THREE.Sphere();
      mesh.geometry.boundingSphere.setFromPoints(points);
    }
  };

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} ref={onMeshCreated}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#915EFF"
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0.1, 0.1, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading={true}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      className="cursor-move"
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Preload
          urls={[icon]} // Preload the image specified by icon prop
        />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;