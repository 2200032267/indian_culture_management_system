import React, { useState } from 'react';
import './Gallery.css'; 

import bharat from '../images/bharat.jpg'; // Import image for dances
import kathakImage from '../images/kathak.jpg'; // Import image for food
import kathakaliImage from '../images/kathakali.jpg'; // Import image for artifacts
import manipuriImage from '../images/manipuri.jpg'; // Import image for festivals
import kuchipudiImage from '../images/kuchipudi.jpg'; // Import image for music
import odissiImage from '../images/odissi.jpg'; // Import image for music
import poothaRekuluImage from '../images/poothaRekulu.jpg';
import hyderabadiBiryaniImage from '../images/hyderabadiBiryani.jpg';
import sambarIdlyImage from '../images/sambarIdly.jpg';
import appamImage from '../images/appam.jpg';
import pongalImage from '../images/pongal.jpg';
import buddhistArtifactsImage from '../images/buddhistArtifacts.jpg';
import mughalArtifactsImage from '../images/mughalArtifacts.jpg';
import colonialEraArtifactsImage from '../images/colonialEraArtifacts.jpg';
import textilesAndHandicraftsImage from '../images/textilesAndHandicrafts.jpg';
import folkArtAndCraftsImage from '../images/folkArtAndCrafts.jpg';
import holiImage from '../images/holi.jpg';
import dussehraImage from '../images/dussehra.jpg';
import sankratiImage from '../images/sankrati.jpg';
import diwaliImage from '../images/diwali.jpg';
import sriRamanavamiImage from '../images/ramnavami.jpg';
import indianPopMusicImage from '../images/indianPop.jpg';
import classicalMusicImage from '../images/classicalMusic.jpg';
import folkMusicImage from '../images/folkMusic.jpg';
import tablaImage from '../images/tabla.jpg';
import bhangraImage from '../images/bhangra.jpg';

const Module = () => {
  const [showDances, setShowDances] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showArtifacts, setShowArtifacts] = useState(false);
  const [showFestivals, setShowFestivals] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  const dances = [
    { 
      name: 'Bharatnatyam', 
      description: 'Classical dance form originating from Tamil Nadu', 
      image: bharat 
    },
    { 
      name: 'Kathak', 
      description: 'Classical dance form originating from North India, known for its intricate footwork and graceful movements', 
      image: kathakImage 
    },
    { 
      name: 'Kathakali', 
      description: 'Classical dance-drama from Kerala, known for its elaborate costumes and makeup', 
      image: kathakaliImage 
    },
    { 
      name: 'Manipuri', 
      description: 'Classical dance form from Manipur, characterized by its graceful and fluid movements', 
      image: manipuriImage 
    },
    { 
      name: 'Kuchipudi', 
      description: 'Classical dance form from Andhra Pradesh, combining dance, music, and acting', 
      image: kuchipudiImage 
    },
    { 
      name: 'Odissi', 
      description: 'Classical dance form from Odisha, characterized by fluid movements and sculpturesque poses', 
      image: odissiImage 
    }
  ];
  
  const food = [
    { 
      name: 'Pongal', 
      description: 'Tamil harvest festival', 
      image: pongalImage 
    },
    { 
      name: 'Pootha Rekulu', 
      description: 'Traditional sweet from Andhra Pradesh', 
      image: poothaRekuluImage 
    },
    { 
      name: 'Hyderabadi Biryani', 
      description: 'Famous rice dish from Hyderabad, Telangana', 
      image: hyderabadiBiryaniImage 
    },
    { 
      name: 'Appam', 
      description: 'South Indian pancake made with fermented rice batter and coconut milk', 
      image: appamImage 
    },
    { 
      name: 'Sambar Idly', 
      description: 'South Indian breakfast dish consisting of idlis served with sambar', 
      image: sambarIdlyImage 
    }
  ];
  
  const artifacts = [
    { 
      name: 'Buddhist Artifacts', 
      description: 'Artifacts related to Buddhism, including statues, relics, and scriptures', 
      image: buddhistArtifactsImage 
    },
    { 
      name: 'Mughal Artifacts', 
      description: 'Artifacts from the Mughal era, including architecture, paintings, and artifacts', 
      image: mughalArtifactsImage 
    },
    { 
      name: 'Colonial-Era Artifacts', 
      description: 'Artifacts from the colonial period in India, reflecting European influence', 
      image: colonialEraArtifactsImage 
    },
    { 
      name: 'Textiles and Handicrafts', 
      description: 'Traditional textiles and handicrafts from different regions of India', 
      image: textilesAndHandicraftsImage 
    },
    { 
      name: 'Folk Art and Crafts', 
      description: 'Art and crafts representing the cultural heritage of various communities in India', 
      image: folkArtAndCraftsImage 
    }
  ];
  
  const festivals = [
    { 
      name: 'Holi', 
      description: 'Festival of colors and love', 
      image: holiImage 
    },
    { 
      name: 'Dussehra', 
      description: 'Celebration of the victory of good over evil', 
      image: dussehraImage 
    },
    { 
      name: 'Sankranti', 
      description: 'Harvest festival celebrated in various parts of India', 
      image: sankratiImage 
    },
    { 
      name: 'Diwali', 
      description: 'Festival of lights celebrated across India', 
      image: diwaliImage 
    },
    { 
      name: 'Sri Ramanavami', 
      description: 'Celebration of the birth of Lord Rama', 
      image: sriRamanavamiImage 
    }
  ];
  
  const music = [
    { 
      name: 'Indian Pop Music', 
      description: 'Popular music genre in India blending Indian and Western styles', 
      image: indianPopMusicImage 
    },
    { 
      name: 'Classical Music', 
      description: 'Traditional music genre with deep roots in Indian culture', 
      image: classicalMusicImage 
    },
    { 
      name: 'Folk Music', 
      description: 'Music reflecting the cultural traditions of different regions in India', 
      image: folkMusicImage 
    },
    { 
      name: 'Tabla', 
      description: 'Indian percussion instrument commonly used in classical, devotional, and popular music', 
      image: tablaImage 
    },
    { 
      name: 'Bhangra', 
      description: 'Punjabi folk dance and music genre known for its energetic beats', 
      image: bhangraImage 
    }
  ];
  

  const handleDancesClick = () => {
    setShowDances(true);
    setShowFood(false);
    setShowArtifacts(false);
    setShowFestivals(false);
    setShowMusic(false);
  };

  const handleFoodClick = () => {
    setShowDances(false);
    setShowFood(true);
    setShowArtifacts(false);
    setShowFestivals(false);
    setShowMusic(false);
  };

  const handleArtifactsClick = () => {
    setShowDances(false);
    setShowFood(false);
    setShowArtifacts(true);
    setShowFestivals(false);
    setShowMusic(false);
  };

  const handleFestivalsClick = () => {
    setShowDances(false);
    setShowFood(false);
    setShowArtifacts(false);
    setShowFestivals(true);
    setShowMusic(false);
  };

  const handleMusicClick = () => {
    setShowDances(false);
    setShowFood(false);
    setShowArtifacts(false);
    setShowFestivals(false);
    setShowMusic(true);
  };

  return (
    <div className="module-container">
      <center>
        <div className="module-options">
          <table>
            <tbody>
              <tr>
                <td>
                  <span onClick={handleDancesClick} className={`module-option ${showDances ? 'active' : ''}`}>
                    Dances
                  </span>
                </td>
                <td>
                  <span onClick={handleFoodClick} className={`module-option ${showFood ? 'active' : ''}`}>
                    Food
                  </span>
                </td>
                <td>
                  <span onClick={handleArtifactsClick} className={`module-option ${showArtifacts ? 'active' : ''}`}>
                    Artifacts
                  </span>
                </td>
                <td>
                  <span onClick={handleFestivalsClick} className={`module-option ${showFestivals ? 'active' : ''}`}>
                    Festivals
                  </span>
                </td>
                <td>
                  <span onClick={handleMusicClick} className={`module-option ${showMusic ? 'active' : ''}`}>
                    Music
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
      <div className="module-details">
      {showDances && (
  <div className="module-card" align="center" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={dances[0].image} alt="Bharatnatyam" height="200" width="200" />
      <p>{dances[0].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={dances[1].image} alt="Bharatnatyam" height="200" width="200" />
      <p>{dances[1].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={dances[2].image} alt="Bharatnatyam" height="200" width="200" />
      <p>{dances[2].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={dances[3].image} alt="Bharatnatyam" height="200" width="200" />
      <p>{dances[3].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={dances[4].image} alt="Bharatnatyam" height="200" width="200" />
      <p>{dances[4].name}</p>
    </div>
    
    <table className="module-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {dances.map((dance, index) => (
          <tr key={index}>
            <td>{dance.name}</td>
            <td>{dance.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{showFestivals && (
  <div className="module-card" align="center" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={festivals[0].image} alt="Holi" height="200" width="200" />
      <p>{festivals[0].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={festivals[1].image} alt="Holi" height="200" width="200" />
      <p>{festivals[1].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={festivals[2].image} alt="Holi" height="200" width="200" />
      <p>{festivals[2].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={festivals[3].image} alt="Holi" height="200" width="200" />
      <p>{festivals[3].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={festivals[4].image} alt="Holi" height="200" width="200" />
      <p>{festivals[4].name}</p>
    </div>
    
    <table className="module-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {festivals.map((festival, index) => (
          <tr key={index}>
            <td>{festival.name}</td>
            <td>{festival.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
{showArtifacts && (
  <div className="module-card" align="center" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
  <div style={{ margin: '0 30px', textAlign: 'center' }}>
    <img src={artifacts[0].image} alt="Buddhist Artifacts" height="200" width="200" />
    <p>{artifacts[0].name}</p>
  </div>
  <div style={{ margin: '0 30px', textAlign: 'center' }}>
    <img src={artifacts[1].image} alt="Buddhist Artifacts" height="212" width="220" />
    <p>{artifacts[1].name}</p>
  </div>
  <div style={{ margin: '0 30px', textAlign: 'center' }}>
    <img src={artifacts[2].image} alt="Buddhist Artifacts" height="200" width="200" />
    <p>{artifacts[2].name}</p>
  </div>
  <div style={{ margin: '0 30px', textAlign: 'center' }}>
    <img src={artifacts[3].image} alt="Buddhist Artifacts" height="200" width="200" />
    <p>{artifacts[3].name}</p>
  </div>
  <div style={{ margin: '0 30px', textAlign: 'center' }}>
    <img src={artifacts[4].image} alt="Buddhist Artifacts" height="200" width="200" />
    <p>{artifacts[4].name}</p>
  </div>

  
  <table className="module-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {artifacts.map((artifact, index) => (
        <tr key={index}>
          <td>{artifact.name}</td>
          <td>{artifact.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
)}

{showMusic && (
  <div className="module-card" align="center" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={music[0].image} alt="Music" height="200" width="200" />
      <p>{music[0].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={music[1].image} alt="Music" height="200" width="200" />
      <p>{music[1].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={music[2].image} alt="Music" height="200" width="200" />
      <p>{music[2].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={music[3].image} alt="Music" height="200" width="200" />
      <p>{music[3].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={music[4].image} alt="Music" height="200" width="200" />
      <p>{music[4].name}</p>
    </div>
    
    <table className="module-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {music.map((genre, index) => (
          <tr key={index}>
            <td>{genre.name}</td>
            <td>{genre.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{showFood && (
  <div className="module-card" align="center" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={food[0].image} alt="Food" height="200" width="200" />
      <p>{food[0].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={food[1].image} alt="Food" height="200" width="200" />
      <p>{food[1].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={food[2].image} alt="Food" height="200" width="200" />
      <p>{food[2].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={food[3].image} alt="Food" height="200" width="200" />
      <p>{food[3].name}</p>
    </div>
    <div style={{ margin: '0 30px', textAlign: 'center' }}>
      <img src={food[4].image} alt="Food" height="200" width="200" />
      <p>{food[4].name}</p>
    </div>
   
    <table className="module-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {food.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

      </div>
      </div>
    
  );
};

export default Module;
