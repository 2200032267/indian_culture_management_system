import React, { useState } from 'react';
import IndianMapImage from '../images/indiamap.png';

const IndianMap = () => {
  // State to keep track of the selected state
  const [selectedState, setSelectedState] = useState(null);

  // Data for famous cities of each state
  const stateCitiesData = {
    AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Tirupati", "Rajamahendravaram"],
    ArunachalPradesh: ["Itanagar", "Tawang", "Ziro"],
    Assam: ["Guwahati", "Silchar", "Dibrugarh"],
    Bihar: ["Patna", "Gaya", "Bodh Gaya"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Haryana: ["Gurgaon", "Faridabad", "Panipat"],
    HimachalPradesh: ["Shimla", "Manali", "Dharamshala"],
    JammuAndKashmir: ["Srinagar", "Jammu", "Leh"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    MadhyaPradesh: ["Bhopal", "Indore", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Manipur: ["Imphal", "Ukhrul", "Chandel"],
    Meghalaya: ["Shillong", "Tura", "Cherrapunji"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai"],
    Nagaland: ["Kohima", "Dimapur", "Wokha"],
    Odisha: ["Bhubaneswar", "Cuttack", "Puri"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar"],
    Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
    Sikkim: ["Gangtok", "Namchi", "Gyalshing"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
    Tripura: ["Agartala", "Dharmanagar", "Udaipur"],
    UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
    Uttarakhand: ["Dehradun", "Haridwar", "Nainital"],
    WestBengal: ["Kolkata", "Darjeeling", "Siliguri"]
  };

  // Function to handle state selection
  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={IndianMapImage} alt="indiamap" width="500" height="500" useMap="#indiamap" />
      <h2>States of India</h2>
      <table style={{ margin: '20px auto', border: '1px solid black', borderCollapse: 'collapse' }}>
        <tbody>
          {/* Add "Click Here" button for each state */}
          {Object.keys(stateCitiesData).map((state, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black' }}>
                <button onClick={() => handleStateClick(state)} style={{ backgroundColor: 'lightblue', padding: '5px 10px', margin: '5px', border: 'none', borderRadius: '5px' }}>
                  {state}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display selected state's cities */}
      {selectedState && (
        <div>
          <h2>Famous Cities of {selectedState}</h2>
          <table style={{ margin: '20px auto', border: '1px solid black', borderCollapse: 'collapse' }}>
            <tbody>
              {/* Add rows for cities */}
              {stateCitiesData[selectedState].map((city, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IndianMap;
