import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white flex gap-2'>
                <p>Assets belong to their respective owners.</p>
                {/* <p>|</p>
                <p>Privacy Policy</p> */}
            </div>

            <div className='flex gap-3'>
                <a href="https://github.com/trietngo">
                    <button className='cursor-pointer social-icon transition duration-300 hover:social-icon-hover-green'>
                        <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2 transition duration-300 ease-in-out hover:scale-110'/>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/triet-ngo/">
                    <button className='cursor-pointer social-icon transition duration-300 hover:social-icon-hover-blue'>
                        <img src="/assets/linkedin.png" alt="linkedin" className='w-1/2 h-1/2 transition duration-300 ease-in-out hover:scale-110'/>
                    </button>
                </a>
            </div>

            <p className='text-white'>©  2025 Triet Ngo. All Rights Reserved.</p>
        </section>
    )
}

export default Footer