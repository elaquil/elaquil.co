import { useContext } from "react";
import "./HeroSection.css";
import ThemeContext from "../context/ThemeContext";

const HeroSection = () => {

  const themeProviderItems = useContext(ThemeContext);
  const { theme } = themeProviderItems;


  return (
    <div className="hero-section">
      <p>
        i'm a competent web engineer (<i className="nf nf-md-language_typescript"></i>,<i className="nf nf-seti-c_sharp"></i>
        ,<i className="nf nf-seti-react"></i>,<i className="nf nf-dev-angular"></i>,<i className="nf nf-dev-html5"></i>,<i className="nf nf-dev-css3"></i>) 
        , data engineer (<i className='nf nf-seti-scala'></i>,<i className="nf nf-seti-python"></i>,<i className='nf nf-dev-apachespark'></i>,<i className='nf nf-dev-hadoop'></i>,<i className='nf nf-dev-apacheairflow'></i>), and motion designer (<img className={"icon "+(theme)} src="Adobe_After_Effects_CC_icon.svg"></img>,<img className={"icon "+(theme)} src="Adobe_Photoshop_CC_icon.svg"></img>,<i className="nf nf-md-blender_software"></i>). 
        with a b.sc in computer science (major: artificial intelligence). i'm interested in the intersection 
        between digital and analogue, and where human creativity can interface with intelligent systems for 
        novel applications. i've worked with a variety of clients as a freelancer. i hope my work interests 
        you, you may reach me by any of the means provided above.
      </p>
    </div>
  );
};

export default HeroSection;
