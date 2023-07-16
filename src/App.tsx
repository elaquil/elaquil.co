import './App.css';
import TickerButton from './components/TickerButton';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import {ThemeContextProvider} from './context/ThemeContext';
import { useEffect, useState } from 'react';

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
          <TickerButton anchor="#" buttonText='0. WEB DEVELOPMENT'/>
          <TickerButton anchor="#" buttonText='1. MOTION GRAPHICS'/>
          <TickerButton anchor="#" buttonText='2. VIDEO'/>
          <br></br>
          <ThemeToggle />
        </div>
        <HeroSection />
      </>
    </ThemeContextProvider>
  )
}

export default App
