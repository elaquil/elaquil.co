import { useEffect, useState } from "react";
import TickerButton from "./TickerButton";

const ThemeToggle = () => {
  const [innerText, setInnerText] = useState('LIGHTS OFF');
  const changeTheme = () => {
    if (innerText === 'LIGHTS OFF') {
      setInnerText('LIGHTS ON');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setInnerText('LIGHTS OFF');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setInnerText('LIGHTS ON');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);
  
  return(
    <span onClick={changeTheme}>
      <TickerButton anchor="#" buttonText={innerText}/>
    </span>
  );
}

export default ThemeToggle;