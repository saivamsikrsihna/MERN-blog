import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';

function ThreeScene() {
  const cubeRef = useRef();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={cubeRef} position={[0, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}

export default ThreeScene;
