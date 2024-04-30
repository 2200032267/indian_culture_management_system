import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import tirupati from '../images/tirupati.jpg';
import charminar from '../images/charminar.jpg';
import shiva from '../images/shiva.jpg';
import jatayu from '../images/jatayu.jpg';
import dudhsagarfalls from '../images/dudhsagarfalls.jpg';
import mysorepalace from '../images/mysorepalace.jpg';
import purijagannathtemple from '../images/purijagannathtemple.jpg';
import howrah from '../images/howrah.jpg';
import gateofindia from '../images/gateofindia.jpg';
import pinkcity from '../images/pinkcity.jpg';
import kedarnathtemple from '../images/kedarnathtemple.jpg';
import varanasi from '../images/varanasi.jpg';
import redfort from '../images/redfort.jpg';
import baltalvalley from '../images/baltalvalley.jpg';

const HeritageSites = () => {
    const location = useLocation();
    const username = location.state?.username || 'Guest';

    // State for toggling information display
    const [showTirupatiInfo, setShowTirupatiInfo] = useState(false);
    const [showCharminarInfo, setShowCharminarInfo] = useState(false);
    const [showShivaInfo, setShowShivaInfo] = useState(false);
    const [showJatayuInfo, setShowJatayuInfo] = useState(false);
    const [showDudhsagarInfo, setShowDudhsagarInfo] = useState(false);
    const [showMysorePalaceInfo, setShowMysorePalaceInfo] = useState(false);
    const [showPuriJagannathInfo, setShowPuriJagannathInfo] = useState(false);
    const [showHowrahInfo, setShowHowrahInfo] = useState(false);
    const [showGateOfIndiaInfo, setShowGateOfIndiaInfo] = useState(false);
    const [showPinkCityInfo, setShowPinkCityInfo] = useState(false);
    const [showKedarnathInfo, setShowKedarnathInfo] = useState(false);
    const [showVaranasiInfo, setShowVaranasiInfo] = useState(false);
    const [showRedFortInfo, setShowRedFortInfo] = useState(false);
    const [showBaltalValleyInfo, setShowBaltalValleyInfo] = useState(false);

    // Function to toggle information display for each site
    const toggleInfo = (setState) => {
        setState((prevState) => !prevState);
    };

    return (
        <div>
            <center>
                <h1>Few heritage sites of India!!</h1>
                
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* Tirupati Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={tirupati} alt="Tirupati" width="300" height="200" onClick={() => toggleInfo(setShowTirupatiInfo)} style={{ cursor: 'pointer' }} />
                        <h3>ANDHRA PRADESH</h3>
                        {showTirupatiInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#FFE4E1' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>It is the 7th most populous urban agglomeration in the state, with a population of 459,985 in 2011. [3] As of 2011 census, it had a population of 287,035 making it the 9th most populous city in Andhra Pradesh.[3] It is the second biggest city in Rayalaseema after Kurnool. For the year 2012–2013, India's Ministry of Tourism named Tirupati as the "Best Heritage City".[10] Tirupati has been selected as one of the hundred Indian cities to be developed as a smart city under Smart Cities Mission by Government of India..</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Charminar Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={charminar} alt="Charminar" width="300" height="200" onClick={() => toggleInfo(setShowCharminarInfo)} style={{ cursor: 'pointer' }} />
                        <h3>TELANGANA</h3>
                        {showCharminarInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#ADD8E6' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>The Charminar is situated on the east bank of Musi River.[5] To the west lies the Laad Bazaar, and to the southwest lies the richly ornamented Makkah Masjid.[6] It is listed as an archaeological and architectural treasure on the official list of monuments prepared by the Archaeological Survey of India.[7] The English name is a translation and combination of the Urdu words chār and minar or meenar, translating to "Four Pillars"; the towers are ornate minarets attached and supported by four grand arches
                                        charminar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Shiva Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={shiva} alt="Shiva" width="300" height="200" onClick={() => toggleInfo(setShowShivaInfo)} style={{ cursor: 'pointer' }} />
                        <h3>TAMIL NADU</h3>
                        {showShivaInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#FFD700' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Adiyogi is located at the Isha Yoga Centre. Its height, 112 ft, symbolizes the 112 possibilities to attain to moksha (liberation) that are mentioned in yogic culture, and also the 112 chakras in the human system.[5][3] A linga named Yogeshwar Linga was consecrated and placed in front of the statue.[6] The Indian Ministry of Tourism has included the statue in its official Incredible India tourism campaign.[7] It is also the venue of a light and sound show about Shiva and the history of the Yoga Center. The first-of-its-kind light and sound show in India is conducted by the Isha Yoga Centre every day in the evening at the foot of the Adiyogi statue. The show depicts the story of Shiva from his birth to the story of how he met his first disciples and the philosophies he shared. The show also explains the yogic science, the concept of inner engineering, and the scientific basis of yoga in an artistic way.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Jatayu Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={jatayu} alt="Jatayu" width="300" height="200" onClick={() => toggleInfo(setShowJatayuInfo)} style={{ cursor: 'pointer' }} />
                        <h3>KERALA</h3>
                        {showJatayuInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#90EE90' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Jatayu Earth’s Center also holds the distinction of having the world’s largest bird sculpture, which is of Jatayu. The sculpture is 200 feet long, 150 feet broad, 70 feet in height, and has 15,000 square feet of floor area. It took a team of around 200 artists more than 7 years to complete this masterpiece. The sculpture is a stunning piece of art and engineering and has made its way into the Limca Book of Records. Besides the Jatayu sculpture, there is an adventure park, a cable car, ayurvedic cave resorts, an adventure rock hill, and an audio-visual based digital museum at Jatayu Earth’s Center.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Dudhsagar Falls Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={dudhsagarfalls} alt="Dudhsagar Falls" width="300" height="200" onClick={() => toggleInfo(setShowDudhsagarInfo)} style={{ cursor: 'pointer' }} />
                        <h3>GOA</h3>
                        {showDudhsagarInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#B0C4DE' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Dudhsagar Falls is amongst India’s tallest waterfalls with a height of 310 m (1017 feet) and an average width of 30 meters (100 feet). It is a tiered waterfall located on the Mandovi River in the Indian state of Goa on Goa's border with Karnataka state. It is four-tiered.[2] It is 60 km from Panaji city by road and 46 km from Madgaon railway junction by train.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Mysore Palace Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={mysorepalace} alt="Mysore Palace" width="300" height="200" onClick={() => toggleInfo(setShowMysorePalaceInfo)} style={{ cursor: 'pointer' }} />
                        <h3>KARNATAKA</h3>
                        {showMysorePalaceInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#FFFACD' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Mysore Palace is a historical palace and a royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the center of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of Palaces', and there are seven palaces including this one; however, 'Mysore Palace' refers specifically to this one within the Old Fort.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Puri Jagannath Temple Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={purijagannathtemple} alt="Puri Jagannath Temple" width="300" height="200" onClick={() => toggleInfo(setShowPuriJagannathInfo)} style={{ cursor: 'pointer' }} />
                        <h3>ODISHA</h3>
                        {showPuriJagannathInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#FFA07A' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>The temple is famous for its annual Rath Yatra, or chariot festival, in which the three main temple deities are hauled on huge and elaborately decorated temple cars. Since medieval times, it is also associated with intense religious fervour. The temple is sacred to the Vaishnava traditions and saint Ramanuja, and is considered one of the Char Dham pilgrimages that a Hindu must visit in one's lifetime.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Howrah Bridge Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={howrah} alt="Howrah Bridge" width="300" height="200" onClick={() => toggleInfo(setShowHowrahInfo)} style={{ cursor: 'pointer' }} />
                        <h3>WEST BENGAL</h3>
                        {showHowrahInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#FFDEAD' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Howrah Bridge is a bridge with a suspended span over the Hooghly River in West Bengal, India. Commissioned in 1943,[5][6] the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the two cities of Howrah and Kolkata (Calcutta). On 14 June 1965, it was renamed Rabindra Setu after the great Bengali poet Rabindranath Tagore, who was the first Indian and Asian Nobel laureate.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Gate of India Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={gateofindia} alt="Gate of India" width="300" height="200" onClick={() => toggleInfo(setShowGateOfIndiaInfo)} style={{ cursor: 'pointer' }} />
                        <h3>MAHARASHTRA</h3>
                        {showGateOfIndiaInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#00FFFF' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai, in the Indian state of Maharashtra. It was erected to commemorate the landing in December 1911 at Apollo Bunder, Mumbai (then Bombay) of King-Emperor George V and Queen-Empress Mary, the first British monarch to visit India. At the time of the royal visit, the gateway was not yet built, and a cardboard structure greeted the monarch. The foundation stone was laid in March 1913 for a monument built in the Indo-Saracenic style, incorporating elements of 16th-century Gujarati architecture. The final design of the monument by George Wittet was sanctioned only in 1914, and construction was completed in 1924. The structure is a triumphal arch made of basalt, which is 26 metres (85 feet) high. It was used as a symbolic ceremonial entrance to India for Viceroys and the new Governors of Bombay. The gateway is now considered not only as a heritage site but also an icon of Mumbai.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Pink City Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={pinkcity} alt="Pink City" width="300" height="200" onClick={() => toggleInfo(setShowPinkCityInfo)} style={{ cursor: 'pointer' }} />
                        <h3>RAJASTHAN</h3>
                        {showPinkCityInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#FF1493' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Jaipur is also known as the Pink City, due to the dominant color scheme of its buildings. It is located 268 km (167 miles) from the national capital New Delhi. Jaipur was founded in 1727 by the Rajput ruler Jai Singh II, the ruler of Amer, after whom the city is named. It was one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya.[6] During the British Colonial period, the city served as the capital of Jaipur State. After independence in 1947, Jaipur was made the capital of the newly-formed state of Rajasthan.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Kedarnath Temple Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={kedarnathtemple} alt="Kedarnath Temple" width="300" height="200" onClick={() => toggleInfo(setShowKedarnathInfo)} style={{ cursor: 'pointer' }} />
                        <h3>UTTARAKHAND</h3>
                        {showKedarnathInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#E6E6FA' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Kedarnath is one of the most important Hindu pilgrimage sites which is nestled in the lap of the majestic Himalayas in the Rudraprayag district of Uttarakhand. Located at an altitude of 3,583 meters above sea level, the temple is believed to have been built by the Pandavas to atone for their sins committed during the Kurukshetra war. Dedicated to Lord Shiva, the temple is also one of the 12 Jyotirlingas and is considered to be one of the holiest shrines of Lord Shiva.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Varanasi Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={varanasi} alt="Varanasi" width="300" height="200" onClick={() => toggleInfo(setShowVaranasiInfo)} style={{ cursor: 'pointer' }} />
                        <h3>UTTAR PRADESH</h3>
                        {showVaranasiInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#F0E68C' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Varanasi, also known as Benares, Banaras, or Kashi, is a city on the banks of the river Ganges in Uttar Pradesh, India, 320 kilometres (200 mi) south-east of the state capital, Lucknow, and 121 kilometres (75 mi) east of Allahabad. A major religious hub in India, it is the holiest of the seven sacred cities (Sapta Puri) in Hinduism and Jainism, and played an important role in the development of Buddhism and Ravidassia. Varanasi lies along National Highway 2, which connects it to Kolkata, Kanpur, Agra, and Delhi, and is served by Varanasi Junction railway station and Lal Bahadur Shastri International Airport.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Red Fort Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={redfort} alt="Red Fort" width="300" height="200" onClick={() => toggleInfo(setShowRedFortInfo)} style={{ cursor: 'pointer' }} />
                        <h3>NATIONAL CAPITAL TERRITORY OF DELHI</h3>
                        {showRedFortInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#DA70D6' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>The Red Fort is a historic fort in the city of Delhi in India, which served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort in 1638,[5] when he decided to shift his capital from Agra to Delhi. Its design is credited to architect Ustad Ahmad Lahauri.[6][7] The fort lies along the Yamuna River, which fed the moats surrounding most of the walls.[8]</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Baltal Valley Image */}
                    <div style={{ marginRight: '20px' }}>
                        <img src={baltalvalley} alt="Baltal Valley" width="300" height="200" onClick={() => toggleInfo(setShowBaltalValleyInfo)} style={{ cursor: 'pointer' }} />
                        <h3>JAMMU AND KASHMIR</h3>
                        {showBaltalValleyInfo && (
                            <table style={{ border: '3px solid black', backgroundColor: '#8A2BE2' }}>
                                <tbody>
                                    <tr>
                                        <th>Information</th>
                                    </tr>
                                    <tr>
                                        <td>Baltal Valley is a picturesque valley situated at the foot of the Zoji La Pass, which is one of the highest mountain passes in the Himalayan mountain ranges, lying between Sonamarg and Drass in the Ganderbal District of Jammu and Kashmir. Located about 15 km north of Sonamarg, Baltal Valley serves as the base camp for the Amarnath Yatra, which is one of the most important Hindu pilgrimages in India.</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
                <br />
                <h3>Welcome {username}!</h3>
            </center>
        </div>
    );
};

export default HeritageSites;
