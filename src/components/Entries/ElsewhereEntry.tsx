import { useRef } from "react";
import Entry from "../Entry";
import ImageModal from "../ImageModal";

const ElsewhereEntry = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  return(
      <Entry title="ELSEWHERE TRANSMISSIONS® assets (2021-2022) [After Effects, Blender, Photoshop]" 
      subtitle={<h2>for <a href='https://instagram.com/dom.mclennon' target='blank'>@dom.mclennon</a>
      , <a href='https://instagram.com/elsewhere.transmissions' target='blank'>@elsewhere.transmissions</a></h2>}>
      <div className='gridContainer'>
          <div className='grid gridElsewhere'>
            <ImageModal src='showcase/elsewhereTransmissions/Elsewhere1.gif' className='gridItem gridItemElsewhere1'></ImageModal>
            <ImageModal src='showcase/elsewhereTransmissions/Elsewhere2.gif' className='gridItem gridItemElsewhere2'></ImageModal>
            <ImageModal src='showcase/elsewhereTransmissions/Elsewhere3.gif' className='gridItem gridItemElsewhere3'></ImageModal>
            <video autoPlay muted loop webkit-playsinline playsInline className='gridItem gridItemElsewhere4' onClick={togglePlay} ref={videoRef}>
              <source src="showcase/elsewhereTransmissions/ElsewhereClip.mp4"></source>
            </video>
          </div>
        </div>
        <p>a series of motion graphics assets created for ELSEWHERE TRANSMISSIONS® - a community-based independent broadcasting platform created by Dom McLennon, worked on enhancing the visuals and producing a motion identity for the brand.</p>
      </Entry>
    );
};

export default ElsewhereEntry;
