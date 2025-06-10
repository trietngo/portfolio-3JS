import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useState, useRef } from 'react'
import { Image, Scroll, useScroll, ScrollControls } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { easing } from 'maath'

const PastProjects = () => {

    const material = new THREE.LineBasicMaterial({ color: '#fff'})
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])

    const state = proxy({
        clicked: null,
        urls: [
            '/assets/gfxImages/arches.jpg',
            '/assets/gfxImages/art-for-elsalvador.png',
            '/assets/gfxImages/election.webp',
            '/assets/gfxImages/hands-for-haiti.png',
            '/assets/gfxImages/hats-off.png',
            '/assets/gfxImages/house-photo.webp',
            '/assets/gfxImages/improv-show-final-poster-01.webp',
            '/assets/gfxImages/leadership-roundabout.png',
            '/assets/gfxImages/coffee-camera.webp',
            '/assets/gfxImages/leadership-style.jpg',
            '/assets/gfxImages/mlk-day-19.jpg',
            '/assets/gfxImages/new-aldaya.png',
            '/assets/gfxImages/sf.jpg',
            '/assets/gfxImages/tie-blankets.jpg',
            '/assets/gfxImages/water.webp',
            '/assets/gfxImages/main-st.jpg',
            '/assets/gfxImages/tea.jpg',
            '/assets/gfxImages/lanterns.jpg',
        ]

        // urls: [1, 2, 3].map((u) => `/assets/gfxImages/${u}.jpg`)
        
    })

    // Minimap for scrolling
    const Minimap = () => {
        const ref = useRef()
        const scroll = useScroll()
        const { urls } = useSnapshot(state)
        const { height } = useThree((state) => state.viewport)

        console.log(height)

        useFrame((state, delta) => {
            ref.current.children.forEach((child, index) => {
                // Select a value between 0 and 1
                // starting at the position of current item
                // ranging across 4 / total length
                // and turn it into a sine wave so the value goes from 0 to 1 to 0.
                const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
                easing.damp(child.scale, 'y', 0.15 + y / 6, 0.15, delta)
            })
        })

        // Render minimap
        return (
            <group ref={ref}>
                {urls.map((_, i) => (
                    <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
                ))}
            </group>
        )
    }

    // Each item
    const Item = ({ index, position, scale, c = new THREE.Color(), ...props }) => {
        const ref = useRef()
        const scroll = useScroll()
        const { clicked, urls } = useSnapshot(state)
        const [hovered, hover] = useState(false)

        // OnClick, OnPointerOver, OnPointerOut
        const click = () => (state.clicked = index === clicked ? null : index)
        const over = () => hover(true)
        const out = () => hover(false)

        useFrame((state, delta) => {

            const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)

            // Scaling
            easing.damp3(ref.current.scale, [clicked === index ? 4.7 : scale[0], clicked === index ? 6 : 4 + y, 1], 0.15, delta)

            // Set image scale
            ref.current.material.scale.x = ref.current.scale.x
            ref.current.material.scale.y = ref.current.scale.y

            if (clicked !== null && index < clicked) easing.damp(ref.current.position, 'x', position[0] - 2, 0.15, delta)
            if (clicked !== null && index > clicked) easing.damp(ref.current.position, 'x', position[0] + 2, 0.15, delta)
            if (clicked === null || clicked === index) easing.damp(ref.current.position, 'x', position[0], 0.15, delta)

            // Color not in middle nor hovered = grey
            easing.damp(ref.current.material, 'grayscale', hovered || clicked === index ? 0 : Math.max(0, 1 - y), 0.15, delta)

            // Color in middle is yellow
            // and when hovered is white
            easing.dampC(ref.current.material.color, hovered || clicked === index ? '#fff' : '#FFCC57', hovered ? 0.3 : 0.15, delta)
        })

        return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out}></Image>
        
    }

    // Items group
    const Items = ({ w = 0.7, gap = 0.15}) => {
        const { urls } = useSnapshot(state)
        const { width } = useThree((state) => state.viewport)

        const xWidth = w + gap

        return (
            <ScrollControls horizontal damping={0.1} pages={(width - xWidth + urls.length * xWidth) / width} style={{"scrollbar-width": "none", "scroll-behavior": "auto"}}>

                <Minimap />
                
                <Scroll>
                    {urls.map((url, i) => <Item key={i} index={i} position={[i * xWidth, 0, 0]} scale={[w, 4, 1]} url={url} /> )}
                </Scroll>

            </ScrollControls>
        )
    }

    // If mouse in canvas, disable page scroll
    const mouseInCanvas = () => {
        console.log("Mouse in canvas")
        document.body.style.height = "100%"
        document.body.style.overflow = "hidden"
    }

    // If mouse left canvas, re-enable page scroll
    const mouseLeftCanvas = () => {
        console.log("Mouse left canvas")

        if (document.body.style.height) {
            document.body.style.height = ''
        }

        if (document.body.style.overflow) {
            document.body.style.overflow = ''
        }
        
    }

    return (
        <section className="h-[50rem] c-space w-full my-20 relative">

            <a className="anchor" id="pastProjects"></a>

            <h3 className="head-text text-white">Pics and Posters</h3>

            <p className="text-white text-lg  mt-5">Check out my posters and photographs created and captured through the years :) Hover away from the carousel to resume page scrolling.</p>

            <div className="w-full h-[50rem] pr-10 absolute -mt-10">
                
                <Suspense fallback={null}>
                    <Canvas className="pr-10 relative" gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)} onPointerOver={() => mouseInCanvas()} onPointerLeave={() => mouseLeftCanvas()}>
                        <Items />
                    </Canvas>
                </Suspense>
                
            </div>

            
        </section>
    )
}

export default PastProjects