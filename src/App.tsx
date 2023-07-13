import './App.css';
import TickerButton from './components/TickerButton';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

function App() {

  return (
    <>
      <Header />
      <div className='nav'>
        <TickerButton anchor="#" buttonText='0. WEB DEVELOPMENT'/>
        <TickerButton anchor="#" buttonText='1. MOTION GRAPHICS'/>
        <TickerButton anchor="#" buttonText='2. VIDEO'/>
      </div>
      <ThemeToggle />
    </>
  )
}

export default App
