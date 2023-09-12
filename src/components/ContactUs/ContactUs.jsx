import React from 'react'
import './ContactUs.css';
import SideBar from '../MFP/SideBar/Sidebar';

const ContactUs = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div style={{ "display": "flex" }}>
            <SideBar />
            <div className="getInTouch">
                <div className="container mt-5 ">
                    <div className="contactDesc">
                        <h2 className="mb-3">Get in Touch with us!!</h2>
                        <span className="Content">We value your input and are excited to connect with you. Whether you have questions about our unique initiative, its working or need assistance with an order, or want to share your thoughts, we're open to that.

                            You can reach out to us via the contact form below or directly through our provided email and phone number. We strive to respond promptly and provide you with the information you need.

                            Your feedback is important to us as we continually work to improve our services. We appreciate your time and look forward to hearing from you. Thank you for considering us for your needs. Your engagement drives us to deliver the best experience possible.</span>
                    </div>

                    <form onSubmit={onSubmit} className='cForm'>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>
            </div>

        </div>



    )
}

export default ContactUs;
