import React from 'react';
import { useLocation } from 'react-router-dom';
import culture1 from '../images/culture1.jpg';
import india from '../images/india.jpg';
import Grid from '@mui/material/Grid';

const Home = () => {
    const location = useLocation();
    const username = location.state?.username || '';

    return (
        <div style={{ 
            backgroundImage: `url(/images/bi.jpg)`,

           


            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Adjust the height as needed
            }}>
            <center>
                {/* <h2>Welcome, {username}!</h2> */}
                <img src={culture1} alt="Culture" width="600" height="600" />
                {/* Other content of the home page */}
            </center>
            <Grid container component="main" sx={{ height: '200vh' }}>
                <h2>
                    <center>
                        The Indian Culture Management System is a web-based application that aims to preserve, promote,
                        and manage various aspects of Indian culture and heritage. It serves as a comprehensive
                        platform where users can access information about Indian traditions,
                        art forms, festivals, historical sites, and cultural events.
                    </center>
                </h2>
                <div>
                    <center>
                        <img src={india} alt="india" width="800" height="600" />
                    </center>
                </div>
            </Grid>
        </div>
    );
};

export default Home;
