import React from 'react'

const Home = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

    )
}


const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className="w-full h-auto" />

        default:
            return <Home />
    }
}

const NavButtonIcons = ({x, y, label, link, icon, newTab}) => {
    return (
        
        <div className='absolute cursor-pointer z-50'
            style={{transform: `translate(${x}, ${y})`}}>
            
            {/* Styling Buttons */}
            <button target={newTab ? '_blank' : '_self'}

                
                className='text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backgroup-blur-[6px] shadow-glass-inset hover:shadow-glass-sm'
                aria-label={label}
                name={label}>

                {/* designate a peer with 'peer' class */}
                <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>
                    {getIcon(icon)}

                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' /> 

                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
                        {label}
                    </span>

                </span>

                
            </button>
        </div>
    )
}

export default NavButtonIcons