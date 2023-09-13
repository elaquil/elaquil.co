import './App.css';
import './components/GridLayout.css';
import TickerButton from './components/TickerButton';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import {ThemeContextProvider} from './context/ThemeContext';
import { useEffect, useState } from 'react';
import Section from './components/Section';
import ElsewhereEntry from './components/Entries/ElsewhereEntry';
import MyAccountEntry from './components/Entries/MyAccountEntry';
import TwoHundredEntry from './components/Entries/TwoHundredEntry';
import EverythingThatYouWantEntry from './components/Entries/EverythingThatYouWantEntry';
import DepartedFacilityEntry from './components/Entries/DepartedFacilityEntry';
import LazyImage from './components/LazyImage';
import QuoteToBuyEntry from './components/Entries/QuoteToBuyEntry';
import ElaquilCoEntry from './components/Entries/ElaquilCoEntry';
import AnimatedLogo from './components/AnimatedLogo';

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const retrievedTheme = localStorage.getItem('theme');
    if (retrievedTheme === 'dark') {
      toggleTheme();
    }
  }, []);

  const toggleTheme = () => {
    if(theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const themeProviderItems = {theme, toggleTheme}

  return (
    <ThemeContextProvider value={themeProviderItems}>
      <>
        <Header />
        <div className='nav'>
          <TickerButton anchor="#0" buttonText='0. WEB DEVELOPMENT'/>
          <TickerButton anchor="#1" buttonText='1. MOTION GRAPHICS'/>
          <TickerButton anchor="#2" buttonText='2. VIDEO'/>
          <TickerButton anchor="#3" buttonText='3. MISC'/>
          <br></br>
          <ThemeToggle />
        </div>
        <HeroSection />
        <Section id="0" title="0. WEB DEVELOPMENT">
          <MyAccountEntry />
          <QuoteToBuyEntry />
          <ElaquilCoEntry />
        </Section>
        <br></br>
        <Section id="1" title="1. MOTION GRAPHICS">
          <ElsewhereEntry />
        </Section>
        <br></br>
        <Section id="2" title="2. VIDEO">
          <EverythingThatYouWantEntry />
          <TwoHundredEntry />
        </Section>
        <br></br>
        <Section id="3" title="3. MISC">
          <DepartedFacilityEntry />
        </Section>
        <AnimatedLogo />
      </>
    </ThemeContextProvider>
  )
}

export default App
