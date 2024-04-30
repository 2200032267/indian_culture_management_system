import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeritageSites from './components/HeritageSites';
import Home from './components/Home';
import IndianMap from './components/IndianMap';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import StateList from './components/StateList';

import StateDetails from './components/StateDetails';
import ContactForm from './components/ContactForm';
import ap from './images/ap.jpg';
import tm from './images/tm.jpg';
import mr from './images/mr.jpg';
import kar from './images/kar.jpg';
import up from './images/up.jpg';
import kerala from './images/kerala.jpg';
import mp from './images/mp.jpg';
import delhi from './images/delhi.jpg';
import guj from './images/guj.jpg';
import assam from './images/assam.jpg';
import bihar from './images/bihar.jpg';
import odisha from './images/odisha.jpg';
import goa from './images/goa.jpg';
import arp from './images/arp.jpg';

const App = () => {
  const stateList = [
    {
      _id: 1,
      name: 'Andhra Pradesh',
      culture: 'tollu bommalata, Rituals',
      dress: 'Saree, Dhotis, ',
      food: 'Tasty ghee sweets, spicy food',
      festivals: 'Pongal',
      temples: 'tirupathi,vijayawada,annavaram',
      image: ap, // Fix image import
    },
    {
      _id: 2,
      name: 'Maharashtra',
      culture: 'Koli, Powada, Banjara Holi and Lavani dance.',
      dress: 'chudhidhar, Dhotis',
      food: 'motak,vadda pav',
      festivals: 'Ganesh chathurdhi,',
      temples: 'Bhuleshwar Temple,Bibi-Ka-Maqbara',
      image: mr,
    },
    {
      _id: 3,
      name: 'Tamilnadu',
      culture: 'A blend of ancient traditions, art, music, and literature ',
      dress: 'Saree, Dhotis',
      food: 'sambar_idli, ',
      festivals: 'pongal, ',
      temples: 'Sri Anthapadmanabha temple',
      image: tm,
    },
    {
      _id: 4,
      name: 'Karnataka',
      culture: 'home to Tuluvas, who also consider themselves as Kannadigas',
      dress: 'Saree, Dhotis',
      food: 'Haalbai,Bisi Bele Bath, Neer Dosa,Jolada rotti.',
      festivals: 'Mysore Dasara, Ugadi, Hampi Festival, Karnataka Rajyotsava.',
      temples: 'Udupi Srikrishna Temple, Udupi,Vidyashankara Temple,Murudeshwar Shiva Temple ',
      image: kar,
    },
    {
      _id: 5,
      name: 'Uttar pradesh',
      culture: 'The folk tradition includes a variety of classical music, dance and drama',
      dress: 'Saree, Dhotis',
      food: 'Tunday Kebab, Chicken Korma, Murgh Musallam:',
      festivals: 'Raksha Bandhan, Vaishakhi Purnima, Dussehra, Krishna Janmashtami, Ram Navami',
      temples: 'Kashi Vishwanath Temple, Varanasi, Shri Krishna Janmabhoomi Temple, Ayodhya - Ram Janmabhoomi Temple.',
      image: up,
    },
    {
      _id: 6,
      name: 'Kerala',
      culture: 'A blend of both Indian and Dravidian styles.',
      dress: 'the traditional dress is a two-piece set known as the mundum neriyathum',
      food: 'Puttu And Kadala Curry, Appam With Ishtu, Idli Sambar',
      festivals: 'Pongala Festival, Navarathri Festival, Makaravillakku Festival',
      temples: 'Sree Padmanabhaswamy Temple, Chottanikkara Temple, Guruvayoor Shrikrishna Temple',
      image: kerala ,
    },
    {
      _id: 7,
      name: 'Madhya Pradesh',
      culture: 'The place has nurtured some epic rulers and warriors as well',
      dress: 'saree, dhotis',
      food: 'Poha. Source, Daal Bafla. Source, Seekh Kebabs. Source.',
      festivals: 'Lokrang Festival, Akhil Bhartiya Kalidas Samaroh, Khajuraho Festival ',
      temples: 'Chintaman Ganesh Temple, Annapurna Temple',
      image: mp,
    },
    {
      _id: 8,
      name: 'Delhi',
      culture: 'Delhi Culture comprises of art and paintings, which is a part of the tradition of Delhi',
      dress: 'omenfolk wear salwar kameez or saree',
      food: 'Chole Bhature, Butter Chicken, Momo',
      festivals: 'Eid, Holi, Navratri and Dussehra, Durga Puja.',
      temples: 'Akshardham Temple',
      image: delhi,
    },
    {
      _id: 9,
      name: 'Gujarat',
      culture: 'Gujarat is a flourishing state with cultural diversity',
      dress: 'Saree, Dhotis',
      food: 'Thepla, Undhiyu, Khandvi',
      festivals: 'Navratri. Navratri, Rann Utsav. Rann Of Kutch, Uttarayan. Uttarayan. ',
      temples: 'Somnath Temple, Swaminarayan Akshardham Temple, Dwarkadhish Temple',
      image: guj,
    },
    {
      _id: 10,
      name: 'Assam',
      culture: 'Assam, being the home to many ethnic groups and different cultures, is rich in folk music',
      dress: 'Sarees, Dhotis',
      food: 'fish curry, fish fry, bamboo shoots fry, and dail',
      festivals: 'Bihu, Baishagu, Ali-Ai-Ligang, Baikho, Rongker, Rajini Gabra Harni Gabra',
      temples: 'Kamakhya Temple, Negheriting Shiva Doul, Kedareswara Temple',
      image: assam,
    },
    {
      _id: 11,
      name: 'Bihar',
      culture: 'Bihari culture refers to the culture of the Indian state of Bihar.',
      dress: 'women is the Saree, which is draped around the body and worn with a blouse and petticoa',
      food: ' Sattu Sharbat, Puri Sabzi, Tilkut ',
      festivals: 'Makar-Sankranti, Pitrapaksha Mela, Rajgir Mahotsav, Bihula. .',
      temples: 'Ganesh temples, Hanumana temple, Krishna temple, Rama temple',
      image: bihar,
    },
    {
      _id: 12,
      name: 'Odisha',
      culture: ' rich heritage of classical arts, temple architecture, traditional music, dance, and a strong devotion to Lord Jagannath',
      dress: 'Odisha can be an embroidered variation of Kurta and pyjama, just like in other regions of the nation',
      food: 'mudhi mansa, kora khai, khaja, palua ladu, rasagolla and mahura',
      festivals: 'Autumn, Durga Puja, Kali Puja.',
      temples: 'Jagannath Temple, Konark Sun Temple, Gundicha Temple',
      image: odisha,
    },
    {
      _id: 13,
      name: 'Goa',
      culture: 'oa sees a mix of different religions that live together in harmony',
      dress: 'a long skirt called "Pano Bhaju," which pairs with a blouse and a scarf.',
      food: 'The staple food of Goa is rice and fish curry',
      festivals: 'Goa Carnival · Sao Joao Festival · Shigmo Festival · Feast of St Francis Xavier',
      temples: 'Shanta Durga Temple,Mahadev Temple,Chandreshwar Bhoothnath Temple',
      image: goa,
    },
    {
      _id: 14,
      name: 'Arunachal Pradesh',
      culture: 'Arunachal cultural lifestyle is dominated by colourful festivals',
      dress: 'sleeveless chemise, accompanied by an embroidered jacket with long sleeve',
      food: 'Poora Haah, Thukpa, Khura, Momos',
      festivals: 'The Mopin Festival, The Losar festival, the Dree festival of Apatani, Chalo-Loku of Nocte',
      temples: 'GRL Gompa Monastery, Urgelling Monastery, Gorsam Chorten, Taktsang Gompa.',
      image: arp,
    },
    // Add more states
  ];
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heritagesites" element={<HeritageSites />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/StateList" element={<StateList />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/state/:stateId" element={<StateDetails stateList={stateList} />} />
        <Route path="/IndianMap" element={<IndianMap />}  />

      </Routes>
    </>
  );
};

export default App;
//app.js