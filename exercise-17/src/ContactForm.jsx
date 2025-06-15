import React from 'react'
import useForm from './useForm'

function ContactForm() {
    const {values, handleChange} = useForm({
        name: '',
        email: '',
        phone: '',
        message: ''
    }); 

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        console.log('Form submitted:', values);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="phone">Phone:</label>
            <input
                type="text"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm