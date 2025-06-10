import Globe from "react-globe.gl"
import { color } from "three/webgpu"
import Button from "../components/Button"
import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "../components/CanvasLoader"
import { PerspectiveCamera } from "@react-three/drei"
import SummaryCamera from "../components/SummaryCamera"
import OldPc from "../components/OldPc"
import Clapperboard from "../components/Clapperboard"
import Envelope from "../components/Envelope"
import Toast from "../components/Toast"

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    // Click on the copy icon
    const handleCopy = () => {

        // Copy to clipboard
        navigator.clipboard.writeText('minhtriet2499@gmail.com')

        // Set copy to true
        setHasCopied(true)

        // After 2s, set copy back to false
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-10 anchor">

            <a className="anchor" id="about"></a>

            <p className="head-text">Me, Abridged</p>

            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">

                <div className="col-span-1 xl:row-span-3">

                    <div className="grid-container">

                        {/* Rounded pics */}

                        <img src="/assets/avatar_casual.jpg" alt="grid-1" className="rounded-2xl w-full sm:h-[326px] h-fit flex justify-center items-center scale-100 transition duration-300 hover:scale-105" />

                        <div>
                            <p className="grid-headtext">It's Pronounced "Tree-et"</p>
                            <p className="grid-subtext">You probably think that I am some Computer Science nerd, and you would be mostly right! I used to also dabble in Marketing and Digital Media, where I produced entertaining videos, colorful photographs, professional-grade posters, and well-written texts. Nowadays though, I make cool computer programs that you can interact with!
                            </p>
                            <br />
                            <p className="grid-subtext">In short, I like making cool stuff and you can see them on here. Enjoy!</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Canvas className="w-full h-full relative" camera={{ position: [0, 0, 20], fov: 25 }}>

                                {/* Load Canvas */}
                                <Suspense fallback={<CanvasLoader/>}>

                                    {/* Camera */}
                                    <PerspectiveCamera makeDefault position={[0, 0, 0]}/>

                                        <SummaryCamera>
                                            <OldPc />
                                        </SummaryCamera>

                                    <ambientLight intensity={1.5}/>
                                    <directionalLight position={[10, 10, 10]} intensity={1} />

                                </Suspense>

                                {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/> */}

                            </Canvas>

                        </div>

                        <div>
                            <p className="grid-headtext">"Old Timer" Tech Stack</p>
                            <p className="grid-subtext">I consider myself a nostalgic person, and as I grew up with slow computers and limited Internet, my tech stack often reflects the technologies of the yesteryears, where complete, off-line, and self-contained products reigned supreme.</p>
                            <br />
                            <p className="grid-subtext">As such, while I believe I am comfortable with any stack thrown myway, my favorites would have to be Python and C/C++ for general-purpose development. Throw in React.js and MongoDB too and I'll be right at home!</p>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">

                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={false}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                animateIn
                            


                                Add markers
                                labelsData={[{
                                    lat: 37.55, lng: -121.94,
                                    text: "I'm here!",
                                    color: "white",
                                    size: 400
                                }]}
                            >

                            </Globe>


                        </div>

                        <div>
                            <p className="grid-headtext">Hardly Working Hard</p>
                            <p className="grid-subtext">Before Computer Science, I was a lot more involved in digital media. After all, I studied Marketing at the University of Northern Iowa. I really enjoyed making posters and graphics as well as taking photos and videos at events. I got pretty good at using the Adobe Creative Cloud suite, which allowed me to work at local nonprofits and promote their initiatives.</p>
                            <br />
                            <p className="grid-subtext">Being an international student in the States, however, meant that I could not work for long. So I went back to school and earn my Master's in Computer Science at Northeastern University. And now, as a new grad, I am actively looking for SWE roles.</p>
                            <br />
                            <p className="grid-subtext">If you are looking to hire or you know someone who does in the San Francisco Bay Area, let me know!</p>
                        </div>

                        <a href="/#contact">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </a>

                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">

                    <div className="grid-container">
                        {/* <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/> */}

                        <Canvas className="w-full h-full relative" camera={{ position: [0, 0, 20], fov: 25 }}>

                            {/* Load Canvas */}
                            <Suspense fallback={<CanvasLoader/>}>

                                {/* Camera */}
                                <PerspectiveCamera makeDefault position={[0, 0, 0]}/>

                                    <SummaryCamera>
                                        <Clapperboard />
                                    </SummaryCamera>

                                <ambientLight intensity={2.5}/>
                                <directionalLight position={[10, 10, 10]} intensity={1} />

                            </Suspense>

                            {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/> */}

                        </Canvas>

                        <div>
                            <p className="grid-headtext">Promos, Passion, and Programming</p>
                            <p className="grid-subtext">Believe it or not, prior to committing to Computer Science, my background in the field was not extensive. Instead, I was much more engrossed in digital media, and I got really good at making promotional materials through photography, videography, and graphic design. I like to think a lot of the posters hung up at my alma mater were of my own creation, and maybe according to certain metrics, they were.</p>
                            <br />
                            <p className="grid-subtext">But, as these hobbies involved a lot of sitting in front of the computer, my interests gradually shifted to getting much more hands-on with how I choose to distribute my work online. This meant learning how to code. I added another major, Management Information Systems, which let me learn Python for the first time, and later SQL and PHP. In addition to college coursework, I taught myself the "pure" webdev stack: HTML, CSS, and JavaScript, and made my first-ever portfolio website, which can still be seen <a className="hover:text-white transition-colors underline" href="https://trietngo.github.io/main/">here.</a></p>
                            <br />
                            <p className="grid-subtext">And later, feeling more confident, I proposed and designed <a className="hover:text-white transition-colors underline" href="https://trietngo.github.io/nisg/">a new look</a> for the Northern Iowa Student Government where I worked at the time. Adorned with stock footage filmed by yours truly, people praised the new look, but ultimately I did not have the permission to make changes to university websites so this design forever remained a concept. Regardless, these projects made me realize my potential for software development and ultimately spurred my commitment to pursue Computer Science. The rest is history, presented here at long last.</p>
                        </div>
                    </div>

                </div>

                <div className="xl:col-span-1 xl:row-span-2">

                    <div className="grid-container">
                        {/* <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/> */}

                        <Canvas className="w-full h-full relative" camera={{ position: [0, 0, 20], fov: 25 }}>

                            {/* Load Canvas */}
                            <Suspense fallback={<CanvasLoader/>}>

                                {/* Camera */}
                                <PerspectiveCamera makeDefault position={[0, 0, 0]}/>

                                    <SummaryCamera>
                                        <Envelope />
                                    </SummaryCamera>

                                <ambientLight intensity={1}/>
                                <directionalLight position={[10, 10, 10]} intensity={1} />

                            </Suspense>

                            {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/> */}

                        </Canvas>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Send me a message!</p>

                            {/* Copy button */}
                            <div className="copy-container" onClick={handleCopy}>
                                
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient transition duration-300 hover:text-white">minhtriet2499@gmail.com</p>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} className="w-5 fill-white" alt="copy" />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About