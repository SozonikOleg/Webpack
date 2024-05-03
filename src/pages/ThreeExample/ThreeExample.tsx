import React, { useEffect, useRef } from 'react';
// @ts-ignore
import * as THREE from 'three';

const ThreeExample: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let car: THREE.Mesh;

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            camera.position.z = 10;

            // Создание машины (куб)
            const carGeometry = new THREE.BoxGeometry(1, 0.5, 0.5);
            const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            car = new THREE.Mesh(carGeometry, carMaterial);
            scene.add(car);

            // Создание освещения
            const light = new THREE.PointLight(0xffffff, 1, 100);
            light.position.set(0, 0, 10);
            scene.add(light);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    car.position.x -= 0.1;
                    break;
                case 'ArrowRight':
                    car.position.x += 0.1;
                    break;
                case 'ArrowUp':
                    car.position.y += 0.1;
                    break;
                case 'ArrowDown':
                    car.position.y -= 0.1;
                    break;
                default:
                    break;
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', onWindowResize);

        init();
        animate();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', onWindowResize);
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ThreeExample;