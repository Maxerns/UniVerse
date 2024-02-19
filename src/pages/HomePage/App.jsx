import UniverseTxtLogo from '../../../src/assets/UniverseTxtLogo.png';
import IphoneMockup from '../../../src/assets/IphoneMockup.png';
import './App.css';

function App() {
  return (
    <div className="project-background">
      <header className="App-header">
        <img src={UniverseTxtLogo} className="App-logo" alt="logo" />
        <img src={IphoneMockup} className="App-mockup" alt="Mockup of App" />
        
  <div className="slashed-app">
    <div className="top" title="UNIVERSE">
      <div className="content"></div>
    </div>
    <div className="bot" title="UNIVERSE">
      <div className="content"></div>
    </div>
  </div>
      </header>
    </div>
  );
}

export default App;
