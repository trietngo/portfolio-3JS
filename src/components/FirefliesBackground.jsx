"use client"
import React, { useEffect, useState } from "react"

const createFirefly = () => (
    {
        id: Math.random(),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`
    }
)

const FirefliesBackground = () => {

    const [fireflies, setFireflies] = useState([])

    useEffect(() => {

        const addFirefliesPeriodically = () => {

            const newFireFly = createFirefly()

            setFireflies(currentFireflies => [

                // Ensure array remain at size 10-15 elements
                ...currentFireflies.slice(-14),
                newFireFly
            ])
        }

        const interval = setInterval(addFirefliesPeriodically, 1000);

        return () => clearInterval(interval)

    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {
                fireflies.map((firefly) => {
                    return <div key={firefly.id}
                        
                        // Tailwind backgroundImage Config must not be overridden
                        className='absolute rounded-full w-[10px] h-[10px] bg-fireflies-radial'
                        style={{
                            top: firefly.top,
                            left: firefly.left,
                            animation: `move ${firefly.animationDuration} infinite alternate`,
                            // backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)`
                        }}
                    ></div>
                })
            }
        </div>
    )
}

export default FirefliesBackground