// import React, { useEffect, useState } from 'react'
// import SideBar from '../../../Sidebar';
// import './Logout.css';
// import { Button } from 'reactstrap';
// import { connect } from "react-redux";
// import { makeStyles } from '@material-ui/core/styles';
// import { useNavigate } from 'react-router-dom';
// //import dummyImage from '../../../../../../assets/icons/dummyImage.png'
// import SmilingDuck from '../../../../../../assets/icons/SmilingDuck.jpg';


// const Logout = ({ formData, user }) => {
//     const [showModal, setShowModal] = useState(true);
//     const navigate = useNavigate();
//     useEffect(() => {
//         console.log(showModal);
//     }, [showModal])
//     const openModal = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const handleLogout = () => {
//         // Perform logout logic here
//         // Redirect or update state as needed
//         navigate('/');
//         closeModal(); // Close the modal after logout
//     };
//     return (

//         <div className="logoutPage">
//             <SideBar />

//             {showModal && (<div className="modal">
//                 <div className="modal-content">
//                     <h2>Are you sure you want to log out?</h2>
//                     <div className="buttons">
//                         <button className='Cancel' onClick={closeModal}>Cancel</button>
//                         <button className='Yes' onClick={handleLogout}>Yes!</button>
//                     </div>
//                 </div>
//             </div>)}
//             {!showModal && <div className="desc"> 
//                 <h1>Glad, you're back !!!!</h1>
//                 <img src={SmilingDuck} alt="validatingDuck" className='ValidatingDuck'></img>

//             </div>}
//         </div>


//     );

// }

// export default Logout;

import React, { useEffect, useState } from 'react';
import SideBar from '../../../Sidebar';
import './Logout.css';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import SmilingDuck from '../../../../../../assets/icons/SmilingDuck.jpg';

const Logout = ({ formData, user }) => {
    const [showModal, setShowModal] = useState(true); // Set initial value to true
    const navigate = useNavigate();

    useEffect(() => {
        console.log(showModal);
    }, [showModal]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleLogout = () => {
        // Perform logout logic here
        // Redirect or update state as needed
        navigate('/');
        closeModal(); // Close the modal after logout
    };

    return (
        <div className="logoutPage">
            <SideBar />
            {showModal && ( // Render if showModal is true
                <div className="modal">
                    <div className="modal-content">
                        <h2>Are you sure you want to log out?</h2>
                        <div className="buttons">
                            <button className='Cancel' onClick={closeModal}>Cancel</button>
                            <button className='Yes' onClick={handleLogout}>Yes!</button>
                        </div>
                    </div>
                </div>
            )}
            {!showModal && ( // Render if showModal is false
                <div className="desc">
                    <h1>Glad, you're back !!!!</h1>
                    <img src={SmilingDuck} alt="validatingDuck" className='ValidatingDuck' />
                </div>
            )}
        </div>
    );
}

export default Logout;

