import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const CursorEffect = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, transparent: true });
        containerRef.current.appendChild(app.view);

        const cursor = new PIXI.Graphics();
        cursor.beginFill(0x1F2937); // Dark gray color
        cursor.drawCircle(0, 0, 10); // Circle with radius 10
        cursor.endFill();
        cursor.alpha = 30; // Semi-transparent

        const particles = [];
        for (let i = 0; i < 10; i++) {
            const particle = new PIXI.Graphics();
            particle.beginFill(0x777777);
            particle.drawCircle(0, 0, 1.2);
            particle.endFill();
            particle.alpha = 0.5;
            particles.push(particle);
            app.stage.addChild(particle);
        }

        app.stage.addChild(cursor);

        const onPointerMove = (event) => {
            cursor.x = event.data.global.x;
            cursor.y = event.data.global.y;

            particles.forEach((particle, index) => {
                const angle = index / particles.length * Math.PI * 2;
                const distance = Math.random() * 15 + 5;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                particle.x = cursor.x + x;
                particle.y = cursor.y + y;
            });
        };

        app.stage.interactive = true;
        app.stage.on('pointermove', onPointerMove);

        // Resize the canvas when the window is resized
        const onResize = () => {
            app.renderer.resize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onResize);

        // Clean up on unmount
        return () => {
            app.destroy(true, true);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />;
};

export default CursorEffect;