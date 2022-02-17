import coffeeImg from './images/coffee.jpg';
import plantImg from './images/plant.png';
import seedsImg from './images/seeds.png';
import logo from './images/plantshedlogo.png'
import coffee from './pages/coffee';
import plants from './pages/plants';
import seeds from './pages/seeds';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <button onClick={App} class="imageButton">
          <img src={logo} className="Logo" alt="logo" />
          </button>
        <p>
          Click an image to navigate.
        </p>
      </header>
      <body className='App-body'>
        <div class="row">
          <div class="column">
            <button onClick={coffee} class="imageButton">
              <img src={coffeeImg} className="Coffee-Image" alt="Beans"/>
            </button>
          </div>
          <div class="column">
            <button onClick={plants} class="imageButton">
            <img src={plantImg} className="Plants-Image" alt="Plants" />
            </button>
          </div>
          <div class="column">
            <button onClick={seeds} class="imageButton">
            <img src={seedsImg} className="Seeds-Image" alt="Seeds" />
            </button>
          </div>
        </div>
        </body>
    </div>
  );
}

export default App;
