import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleProps {
  count: number;
  color: string;
  size: number;
  speed: number;
}

const LeafParticles: React.FC<ParticleProps> = ({ count, color, size, speed }) => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = count;
  
  const positionArray = new Float32Array(particlesCount * 3);
  const scaleArray = new Float32Array(particlesCount);
  const rotationArray = new Float32Array(particlesCount);
  const speedArray = new Float32Array(particlesCount);
  
  for (let i = 0; i < particlesCount; i++) {
    // Position
    const i3 = i * 3;
    positionArray[i3] = (Math.random() - 0.5) * viewport.width * 2;
    positionArray[i3 + 1] = (Math.random() - 0.5) * viewport.height * 2;
    positionArray[i3 + 2] = (Math.random() - 0.5) * 10;
    
    // Scale variation
    scaleArray[i] = Math.random() * 0.5 + 0.5;
    
    // Rotation
    rotationArray[i] = Math.random() * Math.PI * 2;
    
    // Speed variation
    speedArray[i] = (Math.random() * 0.5 + 0.5) * speed;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
  particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
  particlesGeometry.setAttribute('rotation', new THREE.BufferAttribute(rotationArray, 1));
  particlesGeometry.setAttribute('speed', new THREE.BufferAttribute(speedArray, 1));
  
  // Custom shader material
  const particlesMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      attribute float scale;
      attribute float rotation;
      attribute float speed;
      uniform float uTime;
      
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        
        // Position with time-based animation
        vec3 pos = position;
        pos.y -= speed * uTime;
        
        // Loop particles when they go off-screen
        if (pos.y < -10.0) {
          pos.y = 10.0;
          pos.x = (random(pos.xy) - 0.5) * 30.0;
        }
        
        // Apply scale and rotation
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = scale * ${size.toFixed(1)};
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      
      void main() {
        // Create a circular particle
        float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
        if (distanceFromCenter > 0.5) {
          discard;
        }
        
        gl_FragColor = vec4(${new THREE.Color(color).r.toFixed(1)}, ${new THREE.Color(color).g.toFixed(1)}, ${new THREE.Color(color).b.toFixed(1)}, 1.0 - (distanceFromCenter * 2.0));
      }
    `,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 }
    }
  });

  // Animation
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return <points ref={mesh} geometry={particlesGeometry} material={particlesMaterial} />;
};

export default LeafParticles;