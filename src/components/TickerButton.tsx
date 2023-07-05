import { useEffect, useRef } from 'react';
import './TickerButton.css';

interface tickerButtonProps {
  anchor?: string;
  buttonText: string;
}

const TickerButton = ({anchor = "", buttonText}: tickerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = buttonRef.current;
    const text  = textRef.current;
    if (container && text) {
      const textWidth = text.offsetWidth;
      container.style.width = `${textWidth}px`;
    }
  }, []);

  return(
    <a href={anchor}>
      <button className="tickerButton"  ref={buttonRef}>
          <div className="tickerButtonContainer">
            <h2 className="tickerButtonText" ref={textRef}>{buttonText}</h2>
            <h2 className="tickerButtonText">{buttonText}</h2>
          </div>
      </button>
    </a>
  )
};

export default TickerButton;