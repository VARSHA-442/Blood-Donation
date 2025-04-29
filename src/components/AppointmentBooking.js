



// import React, { useState } from 'react';
// import '../styles/AppointmentBooking.css';
// //import doctor1 from '../assets/doctor1.jpeg';
// // import doctor2 from '../assets/doctor2.jpeg';
// // import doctor3 from '../assets/doctor3.jpeg';
// import doctor1 from '../assests/photo.jpg';
// import doctor2 from'../assests/photo.jpg';
// import doctor3 from '../assests/photo.jpg'
// import doctor4 from '../assests/photo.jpg';
// import doctor5 from'../assests/photo.jpg';
// import doctor6 from '../assests/photo.jpg'


// const doctors = [
//   { id: 1, name: 'Dr. Priya Sharma', specialization: 'Gynecologist', hospital: 'Apollo Hospital', city: 'Delhi', image: doctor1 },
//   { id: 2, name: 'Dr. Ravi Mehta', specialization: 'Pediatrician', hospital: 'Fortis Hospital', city: 'Mumbai', image: doctor2 },
//    { id: 3, name: 'Dr. Anjali Gupta', specialization: 'General Physician', hospital: 'AIIMS', city: 'Bangalore', image: doctor3 },
//    { id: 4, name: 'Dr. Priya Sharma', specialization: 'Gynecologist', hospital: 'Apollo Hospital', city: 'Delhi', image: doctor4 },
//   { id: 5, name: 'Dr. Ravi Mehta', specialization: 'Pediatrician', hospital: 'Fortis Hospital', city: 'Mumbai', image: doctor5 },
//    { id: 6, name: 'Dr. Anjali Gupta', specialization: 'General Physician', hospital: 'AIIMS', city: 'Bangalore', image: doctor6 }
// ];

// const AppointmentBooking = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     bloodGroup: '',
//     hospital: '',
//     city: '',
//     date: ''
//   });
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!selectedDoctor) {
//       alert('Please select a doctor.');
//       return;
//     }

//     const appointmentData = {
//       ...formData,
//       doctor: selectedDoctor
//     };

//     console.log('Appointment Data:', appointmentData);
//     alert('Appointment Booked Successfully!');
//   };

//   return (
//     <div className="appointment-container">
//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <h2>Book an Appointment</h2>

//         <input
//           type="text"
//           placeholder="Your Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
//           <option value="">Select Blood Group</option>
//           <option value="A+">A+</option>
//           <option value="B+">B+</option>
//           <option value="AB+">AB+</option>
//           <option value="O+">O+</option>
//         </select>

       

//         <select name="city" value={formData.city} onChange={handleChange} required>
//           <option value="">Select City</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Bangalore">Bangalore</option>
//         </select>

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />

//         <h3>Select a Doctor</h3>
//         <div className="doctor-grid">
//           {doctors.map(doc => (
//             <div
//               key={doc.id}
//               className={`doctor-card ${selectedDoctor?.id === doc.id ? 'selected' : ''}`}
//               onClick={() => setSelectedDoctor(doc)}
//             >
//               <img src={doc.image} alt={doc.name} />
//               <h4>{doc.name}</h4>
//               <p>{doc.specialization}</p>
//               <p><small>{doc.hospital}</small></p>
//             </div>
//           ))}
//         </div>

//         <button type="submit">Book Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default AppointmentBooking;

import React, { useState } from 'react';
import '../styles/AppointmentBooking.css';
import doctor1 from '../assests/doctor1.jpg';
import doctor2 from '../assests/doctor2.jpg';
import doctor3 from '../assests/doctor3.jpg';
import doctor4 from '../assests/download.jpg';
import doctor5 from '../assests/images (1).jpg';
import doctor6 from '../assests/images.jpg';

const doctors = [
  { id: 1, name: 'Dr.  Ravi Mehta', specialization: 'Gynecologist', hospital: 'Apollo Hospital', city: 'Delhi', image: doctor1 },
  { id: 2, name: 'Dr.Priya Sharma', specialization: 'Pediatrician', hospital: 'Fortis Hospital', city: 'Mumbai', image: doctor2 },
  { id: 3, name: 'Dr. Richard', specialization: 'General Physician', hospital: 'AIIMS', city: 'Bangalore', image: doctor3 },
  { id: 4, name: 'Dr. Charles', specialization: 'Gynecologist', hospital: 'Apollo Hospital', city: 'Delhi', image: doctor4 },
  { id: 5, name: 'Dr. Satyen Bose', specialization: 'Pediatrician', hospital: 'Fortis Hospital', city: 'Mumbai', image: doctor5 },
  { id: 6, name: 'Dr. Anjali Gupta', specialization: 'General Physician', hospital: 'AIIMS', city: 'Bangalore', image: doctor6 }
];

const AppointmentBooking = ({ onAppointmentBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    hospital: '',
    city: '',
    date: ''
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedDoctor) {
      alert('Please select a doctor.');
      return;
    }

    const appointmentData = {
      ...formData,
      doctor: selectedDoctor
    };

    console.log('Appointment Data:', appointmentData);
    alert('Appointment Booked Successfully!');

    if (onAppointmentBook) {
      onAppointmentBook({
        id: Date.now(),
        name: formData.name,
        bloodGroup: formData.bloodGroup,
        city: formData.city
      });
    }

    setFormData({ name: '', bloodGroup: '', hospital: '', city: '', date: '' });
    setSelectedDoctor(null);
  };

  return (
    <div className="appointment-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Book an Appointment</h2>

        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O+">O+</option>
        </select>

        <select name="city" value={formData.city} onChange={handleChange} required>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <h3>Select a Doctor</h3>
        <div className="doctor-grid">
          {doctors.map(doc => (
            <div
              key={doc.id}
              className={`doctor-card ${selectedDoctor?.id === doc.id ? 'selected' : ''}`}
              onClick={() => setSelectedDoctor(doc)}
            >
              <img src={doc.image} alt={doc.name} />
              <h4>{doc.name}</h4>
              <p>{doc.specialization}</p>
              <p><small>{doc.hospital}</small></p>
            </div>
          ))}
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
