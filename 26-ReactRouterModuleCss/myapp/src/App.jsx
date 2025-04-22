import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroNavbar from "../src/components/header/HeroNavbar";
import MainFeatures from './components/featured/MainFeatures';
import CardSection from './components/card/CardSection';
import CenteredContent from './components/costumer/CenteredContent';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';

function App() {
  

  return (
    <>
      <div>
        <HeroNavbar />
        <MainFeatures />
        <CardSection />
        <CenteredContent />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
