// StateDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './StateDetails.css'; // Import the CSS file

const StateDetails = ({ stateList }) => {
  const { stateId } = useParams();

  // Find the state with the matching _id
  const selectedState = stateList.find(state => state._id.toString() === stateId);

  if (!selectedState) {
    return <div>State not found</div>;
  }
  

  return (
    <div className="state-details-container">
      <h2>{selectedState.name} Details</h2>
      <img src={selectedState.image} alt={selectedState.name} style={{ maxWidth: '100%' }} />
      <table className="state-details-table">
        <tbody>
          <tr>
            <th className="detail-label">Culture</th>
            <td className="detail-value">{selectedState.culture}</td>
          </tr>
          <tr>
            <th className="detail-label">Dress</th>
            <td className="detail-value">{selectedState.dress}</td>
          </tr>
          <tr>
            <th className="detail-label">Food</th>
            <td className="detail-value">{selectedState.food}</td>
          </tr>
          <tr>
            <th className="detail-label">Festivals</th>
            <td className="detail-value">{selectedState.festivals}</td>
          </tr>
          <tr>
            <th className="detail-label">Temples</th>
            <td className="detail-value">{selectedState.temples}</td>
          </tr>
          {/* Add more rows for additional details */}
        </tbody>
      </table>
    </div>
  );
};

export default StateDetails;
