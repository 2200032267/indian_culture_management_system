import React from 'react';
import { Link } from 'react-router-dom';
import './StateList.css'; // Import the updated CSS file

const StateList = () => {
  const stateList = [
    { _id: 1, name: 'Andhra Pradesh' },
    { _id: 2, name: 'Maharashtra' },
    { _id: 3, name: 'Tamil Nadu' },
    { _id: 4, name: 'Karnataka' },
    { _id: 5, name: 'Uttar Pradesh' },
    { _id: 6, name: 'Kerala' },
    { _id: 7, name: 'Madhya pradesh' },
    { _id: 8, name: 'Delhi' },
    { _id: 9, name: 'Gujarat' },
    { _id: 10, name: 'Assam' },
    { _id: 11, name: 'Bihar' },
    { _id: 12, name: 'Odisha' },
    { _id: 13, name: 'Goa' },
    { _id: 14, name: 'Arunachal Pradesh' },
    // Add more states as needed
  ];

  return (
    <div className="state-list-container">
      <h2>State List</h2>
      <div className="state-list-cards">
        {stateList.map(state => (
          <div key={state._id} className="state-list-card">
            <p className="state-name">{state.name}</p>
              <Link to={`/state/${state._id}`}>
              <button className="click-here-button">Click Here</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateList;
//statelist