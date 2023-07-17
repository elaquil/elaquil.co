import './App.css';
import './components/GridLayout.css';
import TickerButton from './components/TickerButton';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import {ThemeContextProvider} from './context/ThemeContext';
import { useEffect, useState } from 'react';
import Section from './components/Section';
import Entry from './components/Entry';

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
          <Entry title="My Account (2022-2023) [Next.JS, React, ASP.Net Core]" 
          subtitle={<h2><a href='https://www.raa.com.au/' target='blank'>RAA</a></h2>}>
            <div className='gridContainer'>
              <div className='grid gridMyAccount'>
                <img src='showcase/myAccount/MyAccount1.png' className='gridItem gridItemMyAccount'></img>
                <img src='showcase/myAccount/MyAccount2.png' className='gridItem gridItemMyAccount'></img>
                <img src='showcase/myAccount/MyAccount3.png' className='gridItem gridItemMyAccount'></img>
              </div>
            </div>
          </Entry>
        </Section>
        <br></br>
        <Section id="1" title="1. MOTION GRAPHICS">

        </Section>
        <br></br>
        <Section id="2" title="2. VIDEO">

        </Section>
        <br></br>
        <Section id="3" title="3. MISC">

        </Section>
      </>
    </ThemeContextProvider>
  )
}

export default App
