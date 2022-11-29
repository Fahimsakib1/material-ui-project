import React from 'react';
import Branding from '../Branding/Branding';
import Brands from '../Brands/Brands';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import Faq from './FAQ/Faq';


const Home = () => {
    return (
        <div>
            <Branding></Branding>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
            <Faq></Faq>
        </div>
    );
};

export default Home;