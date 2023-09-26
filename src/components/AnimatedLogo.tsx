import { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";
import './AnimatedLogo.css'

const AnimatedLogo = () => {
  const themeProviderItems = useContext(ThemeContext);
  const { theme } = themeProviderItems;


  return (
    <div className={theme == 'dark' ? 'animatedLogoContainer dark' : 'animatedLogoContainer'}>
      <video autoPlay muted loop webkit-playsinline playsInline className='animatedLogo'>
        <source src="ElaquilCoLogoInOutWeb.mp4"></source>
      </video>
    </div>
  )
}

export default AnimatedLogo;