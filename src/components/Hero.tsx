import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

function Earth(props: any) {
  // In a real implementation, we'd load a proper Earth model
  // For now we'll use a sphere to represent Earth
  return (
    <mesh {...props} rotation={[0, 0, 0.1]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#4CAF50"
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  );
}

function SolarPanel({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.5, 0.5, 0.05]} />
      <meshStandardMaterial color="#03A9F4" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function WindTurbine({ position }: { position: [number, number, number] }) {
  const turbineRef = useRef<any>(null);

  React.useEffect(() => {
    const animate = () => {
      if (turbineRef.current) {
        turbineRef.current.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="#EEEEEE" />
      </mesh>
      <group ref={turbineRef} position={[0, 0.5, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
          <meshStandardMaterial color="#CCCCCC" />
        </mesh>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.6, 0.1, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-0.15, 0.25, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.6, 0.1, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-0.15, -0.25, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.6, 0.1, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}

const EcoScene: React.FC = () => {
  const earthRef = useRef<any>();

  React.useEffect(() => {
    const animate = () => {
      if (earthRef.current) {
        earthRef.current.rotation.y += 0.001;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Earth ref={earthRef} />
      <SolarPanel position={[2.2, 0.5, 0]} rotation={[0, Math.PI / 4, 0]} />
      <SolarPanel position={[2, 0, 0.5]} rotation={[Math.PI / 6, 0, 0]} />
      <WindTurbine position={[-2, 0, 1]} />
      <WindTurbine position={[-1.5, 1, -1]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
      <Environment preset="sunset" />
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <EcoScene />
        </Canvas>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-glass-gradient backdrop-blur-sm p-8 rounded-xl shadow-glass border border-white/10 max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            <span className="text-eco-green-400">Eco</span>Learn
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-poppins text-lg md:text-xl text-white/90 mb-8"
          >
            The future of education meets sustainable innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#about"
              className="bg-eco-green-600 hover:bg-eco-green-700 text-white font-montserrat font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-glass-gradient backdrop-blur-sm hover:bg-white/10 text-white border border-white/20 font-montserrat font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;