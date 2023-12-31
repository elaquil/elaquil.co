import { useState } from 'react';
import './Header.css'
import SocialBubble from './SocialBubble';
import { faGithubAlt, faLinkedinIn, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false);
  const asteriskClick = () => {
    setIsDisclaimerVisible(!isDisclaimerVisible);
  }
  return (
    <>
      <h2>my name is</h2>
      <div className='titleContainer'>
        <h1 className='mainTitle'>Ismael Hamilton-El Aquil</h1>
        <span className="socials">
          <SocialBubble anchor={'mailto:hello@elaquil.co'} icon={faEnvelope} target='_self'/>
          <SocialBubble anchor={'https://github.com/elaquil'} icon={faGithubAlt} />
          <SocialBubble anchor={'https://linkedin.com/in/elaquil'} icon={faLinkedinIn} />
          <SocialBubble anchor={'https://vimeo.com/elaquil'} icon={faVimeoV} />
        </span>
      </div>
      <h2>i develop websites, create motion graphics, and edit videos</h2><h2 className="asterisk" onClick={asteriskClick}>*</h2>
      <br></br>
      <p className={
        "disclaimer" + (isDisclaimerVisible ? " visible" : "")
        }><i>*inclusive of whatever else i feel like doing</i></p>
    </>
  );
}

export default Header;