import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef(null);

    //  TODO: 

    const [form, setForm] = useState({
        name : "",
        email : "",
        message : ""
    })

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleFocus = () => {

    }

    const handleBlur = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Sarika",
                from_email: form.email,
                to_email: "myothermailid001@gmail.com",
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            setForm({
                name : "",
                email : "",
                message : ""
            })
            // TODO: Show success message
            // TODO: Hide an alert
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            // TODO: Show error message
        })
    }

    return (
        <section className='flex lg:flex-row flex-col max-container'>
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className='head-text'>Get in Touch</h1>
                <form action="" className='w-full flex flex-col gap-6 mt-14' onSubmit={handleSubmit}>
                    <label className='font-semibold text-black-500'>Name</label>
                    <input type="text" 
                    name="name"
                    className='input' placeholder='Sarika' 
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                    <label className='font-semibold text-black-500'>Email</label>
                    <input type="email" 
                    name="email"
                    className='input' placeholder='Sarika@gmail.com' 
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                    <label className='font-semibold text-black-500'>Your Message</label>
                    <textarea
                    className='textarea' placeholder='Let me know how I can help you!' 
                    rows={4}
                    required
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                    <button
                    className='btn'
                    type='submit'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={isLoading}
                    >
                        {isLoading ? 'Sending' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact