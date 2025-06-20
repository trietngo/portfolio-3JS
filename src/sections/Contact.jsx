import React, { useRef, useState } from 'react'
import Button from '../components/Button';

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: {
        name, value
    }}) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    // Use email.JS
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send email
        setLoading(true)

        try {
            await emailjs.send(
                serviceID,
                templateID,
                templateParams,
                {
                    from_name: form.name,
                    to_name: 'Triet',
                    from_email: form.email,
                    to_email: 'minhtriet2499@gmail.com',
                    message: form.message
                },
                publicKey
            )

            setLoading(false);
            alert('Message Sent!')
            
            // Reset values after sent
            setForm({
                name: '',
                email: '',
                message: ''
            })

        } catch (error) {
            setLoading(false)

            console.log(error)

            alert('Something went wrong!')
        }

        

        // Email template

    }

    return (
        <section className="c-space my-20" id="contact">

            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                
                {/* Background Image */}
                {/* <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' /> */}

                <div className='contact-container'>
                    <h3 className='head-text'>Let's Connect!</h3>
                    <p className='text-lg text-yellow-600 mt-3'>
                        *Note: I don't feel like hosting so this section is "Under Construction." Please click "Send Message" below to directly send me an email. Thank you for understanding!
                    </p>

                    {/* No submission just yet, requires Email.js */}
                    <form ref={formRef} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>

                            <input 
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='First and Last Name'
                            />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>

                            <input 
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='firstlast@gmail.com'
                            />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>

                            <textarea 
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        {/* Actual button that uses Email.JS */}
                        {/* <button className='field-btn' type='submit' disable={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                        </button> */}

                        <a className='py-4' href="mailto:minhtriet2499@gmail.com">

                            <Button name={loading ? 'Sending...' : 'Send Message'} isBeam containerClass="w-full"></Button>
                            
                            {/* <button type='submit'>

                                <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                            </button> */}
                        </a>

                    </form>
                </div>
            </div>

            
        </section>
    )
}

export default Contact