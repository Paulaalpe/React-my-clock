
import './App.css';
import CountDown from './components/CountDown/CountDown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import StopWatch from './components/StopWatch/StopWatch';

function App() {
  return (
    <div className="App">
      <h1>Pau´s Projects con React</h1>
      <DigitalClock />
      <CountDown />
      <StopWatch />
    </div>
  );
}

export default App;
