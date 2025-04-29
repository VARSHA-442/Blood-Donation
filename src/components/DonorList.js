
// import React from 'react';
// import '../styles/DonorList.css';

// const DonorList = ({ donors }) => {
//   return (
//     <div className="donor-list-container">
//       <h2>Available Donors</h2>
//       {donors.length > 0 ? (
//         <table className="donor-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Blood Group</th>
//               <th>City</th>
//             </tr>
//           </thead>
//           <tbody>
//             {donors.map((donor) => (
//               <tr key={donor.id}>
//                 <td>{donor.name}</td>
//                 <td>{donor.bloodGroup}</td>
//                 <td>{donor.city}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No available donors yet.</p>
//       )}
//     </div>
//   );
// };

// export default DonorList;

import React from 'react';
import '../styles/DonorList.css';

const DonorList = ({ donors }) => {
  return (
    <div className="donor-list-container">
      <h2>Available Donors</h2>
      {donors.length > 0 ? (
        <table className="donor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No available donors yet.</p>
      )}
    </div>
  );
};

export default DonorList;
