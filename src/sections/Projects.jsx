import { Suspense, useState } from "react"
import { myProjects } from "../constants/constants"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"
import CanvasLoader from "../components/CanvasLoader"
import DemoComputer from "../components/DemoComputer"
import RetroTV from "../components/RetroTV"
import OldTv from "../components/OldTv"
import Button from "../components/Button"

// Num of projects
const projectCount = myProjects.length

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    return (
        <section className="c-space my-20">

            <a className="anchor" id="projects"></a>

            <p className="head-text text-white">Projects and Publications</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 justify-between">

                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>

                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>

                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-5">
                            {currentProject.tags.map( (tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        {/* target = blank to open in new tab */}
                        <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer transition duration-300 text-gray_gradient hover:text-white">
                            <p>Check it out</p>
                            <img src="/assets/share-orange-icon.svg" className="w-4 h-4 text-black" alt="arrow" />
                        </a>
                    </div>

                    {/* Nav Arrows */}

                    <div className="flex justify-between items-center mt-7">

                        <button className="btn arrow-btn" onClick={() => handleNavigation('previous')}>
                            <p className="w-3 h-6">&lt;</p>
                        </button>

                        <button className="btn arrow-btn" onClick={() => handleNavigation('next')}>
                            <p className="w-3 h-6">&gt;</p>
                        </button>

                        {/* <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                        </button> */}

                        {/* <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button> */}

                    </div>

                </div>

                {/* Canvas Container */}
                <div className="border border-black-300 bg-black-300 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={2} />
                        <directionalLight position={[10, 10, 5]} />

                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    {/* <DemoComputer texture={currentProject.texture} /> */}

                                    <RetroTV texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>

                        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 8} maxAzimuthAngle={Math.PI / 8} enableZoom={false} />
                    </Canvas>
                </div>

            </div>
        </section>
    )
}

export default Projects