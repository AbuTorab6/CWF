import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import EveryPageTop from '../components/EveryPageTop';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Contact"/>
            <Contact/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    );
};

export default ContactPage;