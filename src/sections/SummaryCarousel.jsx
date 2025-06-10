import * as THREE from 'three'
import { useRef, useState, Suspense, useEffect, createContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { easing } from 'maath'
import { useMediaQuery } from 'react-responsive'

import SummaryCamera from '../components/SummaryCamera.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import Button from '../components/Button.jsx'

// import '../utils/threeUtils.js'
import { calculateSizes } from '../utils/mediaSizes.js'
import ReactLogo from '../components/ReactLogo.jsx'
import Avatar from '../components/Avatar.jsx'
import Star from '../components/Star.jsx'
import Laptop from '../components/Laptop.jsx'
import Phone from '../components/Phone.jsx'
import RetroCamera from '../components/RetroCamera.jsx'

export const SummaryContext = createContext();

export const SummaryCarousel = () => {

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

    const Rig = (props) => {
        const ref = useRef()
        const scroll = useScroll()
        useFrame((state, delta) => {
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate content
            state.events.update() // Raycasts every frame
            easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
            state.camera.lookAt(0, 0, 0) // Look at center
        })

        return <group ref={ref} {...props} />
    }

    const Card = ({ url, ...props }) => {
        const ref = useRef()
        const [hovered, hover] = useState(false)
        const pointerOver = (e) => (e.stopPropagation(), hover(true))
        const pointerOut = () => hover(false)
    
        useFrame((state, delta) => {
            easing.damp3(ref.current.scale, hovered ? 2.5 : 2, 0.1, delta)
            easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
            easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
        })
    
        return (
            <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
                {/* <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]}/> */}
            </Image>
        )
    }

    const [modelNameState, setModelNameState] = useState({
        modelName: ""
    })

    const starLabelHandler = () => {
        setModelNameState({
            modelName: "Star"
        })
    }

    const laptopLabelHandler = () => {
        setModelNameState({
            modelName: "Laptop"
        })
    }

    const reactLogoLabelHandler = () => {
        setModelNameState({
            modelName: "React Logo"
        })
    }

    const ModelLabel = () => {

        return (
            <p className='text-white text-center mb-4'>{modelNameState.modelName}</p>
        )
    }

    const Carousel = ({ radius, count }) => {

        const objectsArray = [
            
            <Star position={[Math.sin((1 / count) * Math.PI * 2) * radius,
                0,
                Math.cos((1 / count) * Math.PI * 2) * radius,
            ]} />,
            
            <ReactLogo position={[Math.sin((2 / count) * Math.PI * 2) * radius,
                0,
                Math.cos((2 / count) * Math.PI * 2) * radius
            ]} />,

            <Phone position={[Math.sin((3 / count) * Math.PI * 2) * radius,
                0,
                Math.cos((3 / count) * Math.PI * 2) * radius
            ]}/>,

            <RetroCamera position={[Math.sin((4 / count) * Math.PI * 2) * radius,
                0,
                Math.cos((4 / count) * Math.PI * 2) * radius
            ]}/>,

            <Laptop position={[Math.sin((5 / count) * Math.PI * 2) * radius,
                0,
                Math.cos((5 / count) * Math.PI * 2) * radius
            ]}/>,

        ]

        return objectsArray
        

        // return Array.from({ length: count }, (_, i) => (
        //     <Card
        //         key={i}
        //         url={`assets/avatar_casual.jpg`}
        //         position={[Math.sin((i / count) * Math.PI * 2) * radius,
        //             0,
        //             Math.cos((i / count) * Math.PI * 2) * radius
        //         ]}
        //         rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        //     />
        // ))
    }

    const move = () => {
        console.log(modelNameState.modelName)
    }

    

    return (

        <SummaryContext.Provider value={modelNameState}>
        <section className="min-h-screen border-0 border-blue-500 w-full flex flex-col relative" id="home">
            
                <div className="w-full mx-auto flex flex-col sm:mt-32 mt-20 c-space gap-3">
                    <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm Triet <span className="waving-hand">👋</span> and I'm a...</p>
                    <p className="hero_tag text-white">Digital Adventurer</p>
                </div>

                <div className="w-full h-full absolute inset-0">

                    {/* Init Leva outside Canvas to avoid namespace error */}
                    {/* <Leva /> */}

                    <Canvas className="w-full h-full relative" camera={{ position: [0, 0, 100], fov: 25 }}>

                        {/* Load Canvas */}
                        <Suspense fallback={<CanvasLoader/>}>

                            {/* Camera */}
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                                {/* <fog attach="fog" args={['#a79', 8.5, 12]} /> */}

                                <Avatar position-y={-3.25} scale={2.75}></Avatar>

                                {/* <ScrollControls pages={5} infinite style={{"overflow-y": "infinite"}}> */}

                                {/* Hide scrollbar but retain scrolling */}
                                {/* Disable smooth scroll */}
                                <ScrollControls pages={6} infinite style={{"scrollbar-width": "none", "scroll-behavior": "auto"}}>

                                    <Rig rotation={[0, 0, 0.15]} position-y={-0.5}>
                                        <Carousel radius={3} count={5} />
                                    </Rig>
                                    
                                </ScrollControls>

                            <ambientLight intensity={2.5}/>
                            <directionalLight position={[10, 10, 10]} intensity={1} />

                        </Suspense>

                        {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/> */}
                        
                    </Canvas>

                    {/* <NavButtons className="w-full h-full" /> */}
                </div>

                {/* Button to next section */}
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    
                    {/* <ModelLabel /> */}
                    <p className="text-white text-center mb-4 font-generalsans">scroll up/down to rotate, and click on any 3D object to see where it takes you :)</p>
                    <a href="#about" className="w-fit">
                        <Button name="...or explore below" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
                    </a>
                </div>

            
        </section>
        </SummaryContext.Provider>
    )

}