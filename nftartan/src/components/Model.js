import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, Sphere } from "@react-three/drei";

function Box() {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh ref={ref}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"#ffffff"} />
    </mesh>
  );
}

const Model = (props) => {
  return (
    <div className={props.className}>
      <Canvas style={{ width: 500, height: 500 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Model;
