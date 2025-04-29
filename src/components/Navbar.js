// // // src/components/Navbar.jsx
// // import React from 'react';
// // import '../styles/Navbar.css';

// // const Navbar = ({ sections }) => {
// //   const scrollToSection = (sectionRef) => {
// //     sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   const handleLogout = () => {
// //     alert('Logged out!');
// //     window.close();
// //     // Add real logout logic here if needed
// //   };

// //   return (
// //     <nav className="navbar">
// //       <img 
// //   src="https://img.freepik.com/free-vector/x9beautiful-hands-saving-blood-drop-card-design_1035-23347.jpg" 
// //   alt="Blood Donation" 
// //   height="50px" 
// //   width="50px" 
// // />
// //       {/* <div className="logo" onClick={() => scrollToSection(sections.home)}>
// //         Blood Donation
// //       </div> */}
// //       <ul className="nav-links">
// //         <li onClick={() => scrollToSection(sections.home)}>Home</li>
// //         <li onClick={() => scrollToSection(sections.login)}>Login</li>
// //         <li onClick={() => scrollToSection(sections.register)}>Register</li>
// //         <li onClick={handleLogout}>Logout</li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;




// // src/components/Navbar.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Navbar.css';

// const Navbar = ({ sections }) => {
//   const scrollToSection = (sectionRef) => {
//     sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/logout');
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo" onClick={() => scrollToSection(sections.home)}>
//         Blood Donation
//       </div>
//       <ul className="nav-links">
//         <li onClick={() => scrollToSection(sections.home)}>Home</li>
//         <li onClick={() => scrollToSection(sections.login)}>Login</li>
//         <li onClick={() => scrollToSection(sections.register)}>Register</li>
//         <li onClick={handleLogout}>Logout</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ sections }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionRef) => {
    sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection(sections.home)}>
        Blood Donation
      </div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection(sections.home)}>Home</li>
        <li onClick={() => scrollToSection(sections.login)}>Login</li>
        <li onClick={() => scrollToSection(sections.register)}>Register</li>
        <li onClick={handleLogout}>Logout</li>
        <li className="menu-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
          &#9776;
          {dropdownOpen && (
            <ul className="dropdown">
            <li onClick={() => navigate('/register')}>Register</li>
            <li onClick={() => scrollToSection(sections.login)}>Login</li>
              <li onClick={() => navigate('/AppointmentBooking')}>Appointment Booking</li></ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
