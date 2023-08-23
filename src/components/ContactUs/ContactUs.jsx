import React from 'react'
import './ContactUs.css';
import SideBar from '../MFP/SideBar/Sidebar';

const ContactUs = () => {
    return (
        <div className="contactUs">
            <SideBar />
            <div className="footer">
                <div className='socRow'>
                    <span className='socials'>Google</span>
                    <span className='socials'>Twitter</span>
                    <span className='socials'>Github</span>
                </div>
            </div>
        </div>


    )
}

export default ContactUs;
