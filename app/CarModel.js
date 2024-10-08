"use client"

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function CarModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, carModel;
    const mount = mountRef.current;

    // Scene Setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x4c566a); // Set background color to light gray

    // Camera Setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 4;
    camera.position.set(0, 2, 8);

    // Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Load 3D Car Model
    const loader = new GLTFLoader();
    loader.load('/scene.gltf', (gltf) => {
      carModel = gltf.scene;
      carModel.scale.set(1.5, 1.5, 1.5);
      carModel.position.set(0, -1.5, 0);
      scene.add(carModel);
    });

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5).normalize();
    scene.add(light);

    // Rotation Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (carModel) carModel.rotation.y += 0.01; // Rotate the car
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup: Remove renderer when component unmounts
    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-50"></div>;
}
