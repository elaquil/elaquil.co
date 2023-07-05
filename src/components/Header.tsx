import { useState } from 'react';
import './Header.css'

const Header = () => {
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false);
  const asteriskClick = () => {
    setIsDisclaimerVisible(!isDisclaimerVisible);
  }
  return (
    <>
      <h2>my name is</h2>
      <h1>Ismael Hamilton-El Aquil</h1>
      <h2>i develop websites, create motion graphics, and edit videos</h2><h2 className="asterisk" onClick={asteriskClick}>*</h2>
      <p className={
        "disclaimer" + (isDisclaimerVisible ? " visible" : "")
        }><i>*inclusive of whatever else i feel like doing</i></p>
    </>
  );
}

export default Header;