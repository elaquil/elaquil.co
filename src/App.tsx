import './App.css';
import TickerButton from './components/TickerButton';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <div>
        <TickerButton anchor="#" buttonText='0. WEB DEVELOPMENT'/>
        <TickerButton anchor="#" buttonText='1. MOTION GRAPHICS'/>
        <TickerButton anchor="#" buttonText='2. VIDEO'/>
      </div>
    </>
  )
}

export default App
