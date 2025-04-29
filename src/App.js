
// // import React, { useRef, useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import Intro from './components/Intro';
// // import DonorList from './components/DonorList';
// // import AppointmentBooking from './components/AppointmentBooking';
// // import DonorDashboard from './components/DonorDashboard';
// // import AdminDashboard from './components/AdminDashboard';
// // import BecomeDonor from './components/BecomeDonor';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import LogoutSuccess from './components/LogoutSuccess';
// // import './App.css';

// // function MainApp() {
// //   const sections = {
// //     home: useRef(null),
// //     login: useRef(null),
// //     // register: useRef(null),
// //     becomeDonor: useRef(null),
// //     appointments: useRef(null),
// //     donors: useRef(null),
// //     dashboard: useRef(null),
// //     admin: useRef(null),
// //   };

// //   const [donors, setDonors] = useState([]);
// //   const [appointments, setAppointments] = useState([]);
// //   const [bloodStock, setBloodStock] = useState({
// //     'A+': 0, 'B+': 0, 'O+': 0, 'AB+': 0,
// //     'A-': 0, 'B-': 0, 'O-': 0, 'AB-': 0,
// //   });

// //   const handleAppointmentBooked = (formData) => {
// //     const newDonor = {
// //       id: Date.now(),
// //       name: formData.name,
// //       bloodGroup: formData.bloodGroup,
// //       city: formData.city
// //     };
// //     setDonors(prev => [...prev, newDonor]);
// //     setAppointments(prev => [...prev, formData]);
// //     setBloodStock(prev => ({
// //       ...prev,
// //       [formData.bloodGroup]: (prev[formData.bloodGroup] || 0) + 1,
// //     }));
// //   };

// //   return (
// //     <div className="App">
// //       <Navbar sections={sections} />
// //       <div ref={sections.home}><Intro scrollToSection={sections} /></div>
// //       <div ref={sections.login}><Login scrollToSection={ref => ref?.current.scrollIntoView({ behavior: 'smooth' })} sections={sections} /></div>
// //       {/* <div ref={sections.register}><Register /></div> */}
// //       <div ref={sections.becomeDonor}><BecomeDonor /></div>
// //       <div ref={sections.appointments}>
// //         <AppointmentBooking onAppointmentBooked={handleAppointmentBooked} />
// //       </div>
// //       <div ref={sections.donors}><DonorList donors={donors} /></div>
// //       <div ref={sections.dashboard}><DonorDashboard lastDonor={donors[donors.length - 1]} /></div>
// //       <div ref={sections.admin}>
// //         <AdminDashboard donors={donors} appointments={appointments} bloodStock={bloodStock} />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // const App = () => (
// //   <Router>
// //     <Routes>
// //       <Route path="/" element={<MainApp />} />
// //       <Route path="/logout" element={<LogoutSuccess />} />
// //     </Routes>
// //   </Router>
// // );

// // export default App;


// import React, { useRef, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Intro from './components/Intro';
// import DonorList from './components/DonorList';
// import AppointmentBooking from './components/AppointmentBooking';
// import DonorDashboard from './components/DonorDashboard';
// import AdminDashboard from './components/AdminDashboard';
// import BecomeDonor from './components/BecomeDonor';
// import Login from './components/Login';
// import Register from './components/Register';
// import LogoutSuccess from './components/LogoutSuccess';
// import './App.css';

// function MainApp() {
//   const sections = {
//     home: useRef(null),
//     login: useRef(null),
//     becomeDonor: useRef(null),
//     appointments: useRef(null),
//     donors: useRef(null),
//     dashboard: useRef(null),
//     admin: useRef(null),
//   };

//   const [donors, setDonors] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [bloodStock, setBloodStock] = useState({
//     'A+': 0, 'B+': 0, 'O+': 0, 'AB+': 0,
//     'A-': 0, 'B-': 0, 'O-': 0, 'AB-': 0,
//   });

//   const handleAppointmentBooked = (formData) => {
//     const newDonor = {
//       id: Date.now(),
//       name: formData.name,
//       bloodGroup: formData.bloodGroup,
//       city: formData.city
//     };
//     setDonors(prev => [...prev, newDonor]);
//     setAppointments(prev => [...prev, formData]);
//     setBloodStock(prev => ({
//       ...prev,
//       [formData.bloodGroup]: (prev[formData.bloodGroup] || 0) + 1,
//     }));
//   };

//   return (
//     <div className="App">
//       <Navbar sections={sections} />
//       <div ref={sections.home}><Intro scrollToSection={sections} /></div>
//       <div ref={sections.login}><Login scrollToSection={ref => ref?.current.scrollIntoView({ behavior: 'smooth' })} sections={sections} /></div>
//       <div ref={sections.becomeDonor}><BecomeDonor /></div>
//       <div ref={sections.appointments}>
//         <AppointmentBooking onAppointmentBooked={handleAppointmentBooked} />
//       </div>
//       <div ref={sections.donors}><DonorList donors={donors} /></div>
//       <div ref={sections.dashboard}><DonorDashboard lastDonor={donors[donors.length - 1]} /></div>
//       <div ref={sections.admin}>
//         <AdminDashboard donors={donors} appointments={appointments} bloodStock={bloodStock} />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<MainApp />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/AppointmentBooking" element={<AppointmentBooking onAppointmentBooked={() => {}} />} />
//       <Route path="/DonorList" element={<DonorList donors={[]} />} />
//       <Route path="/logout" element={<LogoutSuccess />} />
//     </Routes>
//   </Router>
// );

// export default App;

import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import DonorList from './components/DonorList';
import AppointmentBooking from './components/AppointmentBooking';
import DonorDashboard from './components/DonorDashboard';
import AdminDashboard from './components/AdminDashboard';
import BecomeDonor from './components/BecomeDonor';
import Login from './components/Login';
import Register from './components/Register';
import LogoutSuccess from './components/LogoutSuccess';
import './App.css';

function MainApp() {
  const sections = {
    home: useRef(null),
    login: useRef(null),
    becomeDonor: useRef(null),
    appointments: useRef(null),
    donors: useRef(null),
    dashboard: useRef(null),
    admin: useRef(null),
  };

  const [donors, setDonors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [bloodStock, setBloodStock] = useState({
    'A+': 0, 'B+': 0, 'O+': 0, 'AB+': 0,
    'A-': 0, 'B-': 0, 'O-': 0, 'AB-': 0,
  });

  const handleAppointmentBooked = (formData) => {
    const newDonor = {
      id: Date.now(),
      name: formData.name,
      bloodGroup: formData.bloodGroup,
      city: formData.city
    };
    setDonors(prev => [...prev, newDonor]);
    setAppointments(prev => [...prev, formData]);
    setBloodStock(prev => ({
      ...prev,
      [formData.bloodGroup]: (prev[formData.bloodGroup] || 0) + 1,
    }));
  };

  return (
    <div className="App">
      <Navbar sections={sections} />
      <div ref={sections.home}>
        <Intro scrollToSection={sections} />
      </div>
      <div ref={sections.login}>
        <Login scrollToSection={ref => ref?.current.scrollIntoView({ behavior: 'smooth' })} sections={sections} />
      </div>
      <div ref={sections.becomeDonor}>
        <BecomeDonor />
      </div>
      <div ref={sections.appointments}>
        <AppointmentBooking onAppointmentBooked={handleAppointmentBooked} />
      </div>
      <div ref={sections.donors}>
        <DonorList donors={donors} />
      </div>
      <div ref={sections.dashboard}>
        <DonorDashboard lastDonor={donors[donors.length - 1]} />
      </div>
      <div ref={sections.admin}>
        <AdminDashboard donors={donors} appointments={appointments} bloodStock={bloodStock} />
      </div>
      <Footer />
    </div>
  );
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/AppointmentBooking" element={<AppointmentBooking onAppointmentBooked={() => {}} />} />
      <Route path="/" element={<MainApp />} />

      {/* <Route path="/DonorList" element={<DonorList donors={[]} />} /> */}
      <Route path="/logout" element={<LogoutSuccess />} />
    </Routes>
  </Router>
);

export default App;
