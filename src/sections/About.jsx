import Globe from "react-globe.gl"
import { color } from "three/webgpu"
import Button from "../components/Button"
import { useState } from "react"

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
        <section className="c-space my-20" id="about">

            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">

                    <div className="grid-container">

                        {/* Rounded pics */}

                        <img src="/assets/avatar.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain 
                        
                        rounded-lg 
                        aspect-square 
                        object-cover" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Triet!</p>
                            <p className="grid-subtext">I have an extensive background in marketing, and now I'm bringing those experiences to Computer Science! I used to make cool stuff and now they are here. Enjoy!</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I like React.</p>
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
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"


                                // Add markers
                                // labelsData={[{
                                //     lat: 37.55, lng: -121.94,
                                //     text: "I'm here!",
                                //     color: "white",
                                //     size: 400
                                // }]}
                            >

                            </Globe>


                        </div>

                        <div>
                            <p className="grid-headtext">I can work anywhere in the US!</p>
                            <p className="grid-subtext">I'm currently based in Fremont, CA</p>
                        </div>

                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />

                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">

                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">My Passion for Programming</p>
                            <p className="grid-subtext">I love solving problems, even better when I'm having a great time doing it.</p>
                        </div>
                    </div>

                </div>

                <div className="xl:col-span-1 xl:row-span-2">

                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>

                            {/* Copy button */}
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">minhtriet2499@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About