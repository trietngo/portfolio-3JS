import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";

// Leva is a real-time 3D Object Slider Control
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import SummaryCamera from "../components/SummaryCamera.jsx";
import Button from "../components/Button.jsx";

const Summary = () => {

    // Leva Controls
    // const x = useControls(
    //     'HackerRoom',
    //     {
    //         positionX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },

    //         positionY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },

    //         positionZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },

    //         rotationX: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },

    //         rotationY: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },

    //         rotationZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },

    //         scale: {
    //             value: 1,
    //             min: 0.1,
    //             max: 10
    //         }
    //     }
    // )

    // Responsive design: Small, Mobile, and Tablet

    const isSmall = useMediaQuery(
        {maxWidth: 440}
    )

    const isMobile = useMediaQuery(
        {maxWidth: 768}
    )

    const isTablet = useMediaQuery(
        {minWidth: 768, maxWidth: 1024}
    )

    const sizes = calculateSizes(isSmall, isMobile, isTablet)


    return (
        <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm Triet <span className="waving-hand">👋</span> and I'm a...</p>
                <p className="hero_tag text-gray_gradient">Digital Adventurer</p>
            </div>

            <div className="w-full h-full absolute inset-0">

                {/* Init Leva outside Canvas to avoid namespace error */}
                {/* <Leva /> */}

                <Canvas className="w-full h-full">

                    {/* Load Canvas */}
                    <Suspense fallback={<CanvasLoader/>}>

                        {/* Camera */}
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        {/* 3D Object */}
                        <SummaryCamera isMobile={isMobile}>
                            <HackerRoom 
                                // scale={0.1} 
                                // position={[0, 0, 0]} 
                                // rotation={[0, 145, 0]}

                                // position={[x.positionX, x.positionY, x.positionZ]} 
                                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}

                                // scale={[
                                //     x.scale,
                                //     x.scale,
                                //     x.scale
                                // ]}

                                // After playing around with the scaling and positioning,
                                // Pass in desired value

                                // position={[1.1, 0, -4.9]} 
                                // rotation={[3.4, -3.8, -3.2]}

                                // scale={isMobile ? 0.07 : 0.1}

                                // Or use a dedicated size calculator for each screen sizes

                                position={sizes.deskPosition} 
                                rotation={[3.4, 0, 3.15]}

                                scale={sizes.deskScale}
                            />
                        </SummaryCamera>

                        {/* Group of Objects */}
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>

                        {/* Add Light */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />

                    </Suspense>
                    
                </Canvas>
            </div>

            {/* Button to next section */}
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
                </a>
            </div>
        </section>
    )
}

export default Summary;