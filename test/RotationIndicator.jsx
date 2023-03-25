import React from "react";
import * as THREE from "three";

const RotationIndicator = () => {
  const lineRef = React.useRef();

  React.useEffect(() => {
    if (lineRef.current) {
      const points = [
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(0, 0, 1),
      ];

      lineRef.current.geometry.setFromPoints(points);
    }
  }, []);

  // Adjust these values based on the dimensions of your 3D object
  const positionX = 0;
  const positionY = 0;
  const positionZ = 0;

  return (
    <>
      <mesh position={[positionX, positionY, positionZ]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <line ref={lineRef} position={[positionX, positionY, positionZ]}>
        <bufferGeometry />
        <lineBasicMaterial color="white" />
      </line>
    </>
  );
};

export default RotationIndicator;
