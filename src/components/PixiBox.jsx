import React, { useState } from 'react';
import { Spring } from 'react-spring';
import { Stage, Sprite } from '@inlet/react-pixi';
import product1 from '../images/pixiproduct.png';

const config = {
    size: { width: 1695, height: 500 },
    spring: { mass: 10, tension: 1000, friction: 100 },
    stage: { antialias: true, backgroundColor: 0x1099bb },
};

const set = () => ({
    x: Math.random() * config.size.width,
    y: Math.random() * config.size.height,
    rotation: Math.random() * 10,
    scale: Math.max(1, Math.random() * 10),
});

const Box = (props) => (
    <Sprite
        image={product1}
        anchor={0.5}
        {...props}
    />
);

const PixiBox = () => {
    const [transform, setTransform] = useState(set);
    return (
        <Stage
            {...config.size}
            options={config.stage}
            onPointerUp={() => setTransform(set)}
        >
            <Spring native to={transform} config={config.spring}>
                {(props) => (
                    <Box {...props} />
                )}
            </Spring>
        </Stage>
    );
};

export default PixiBox;