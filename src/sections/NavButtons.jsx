"use client"

import NavButtonIcons from '../components/NavButtonIcons';
import { BtnList } from '../constants'

const NavButtons = () => {

    // Circular Arrangements

    const angleIncrement = 360 / BtnList.length;

    return (
        <>
            <section className='w-full h-screen flex items-center justify-center'>

                {/* designate a group with 'group' class */}
                <div className='flex items-center justify-center relative text-white hover:pause animate-spin-slow group'>
                    {
                        BtnList.map((btn, index) => {

                            // CSS Variables to pass into CSS Transform
                            // Convert angleInc to rad
                            const angleRad = (index * angleIncrement * Math.PI) / 180
                            const radius = 'calc(20vw - 10rem)'

                            // X-coord
                            const x = `calc(${radius} * ${Math.cos(angleRad)})`
                            const y = `calc(${radius} * ${Math.sin(angleRad)})`

                            console.log(angleRad, radius, x, y)

                            return <NavButtonIcons key={btn.label} x={x} y={y} {...btn} />
                            
                        
                        })
                    }
                </div>

            </section>
        </>
        
        
    )
}

export default NavButtons