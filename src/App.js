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
        <center>
          <img src={logo} className="Logo" alt="logo" />
        </center>
        <p>
          <b>Click an image to navigate.</b> 
        </p>
      </header>
      <body className='App-body'>
        <div class="row">
          <div class="column">
            <button onClick={coffee} class="imageButton">
            <div class="img__wrap">
              <img src={coffeeImg} className="Coffee-Image" alt="Beans"/>
                <div class="img__description_layer">
                  <p class="img__description">Beans</p>
                </div>
            </div>
            </button>
          </div>
          <div class="column">
            <button onClick={plants} class="imageButton">
            <div class="img__wrap">
              <img src={plantImg} className="Plants-Image" alt="Plants" />
                <div class="img__description_layer">
                  <p class="img__description">Plants</p>
                </div>
            </div>
            </button>
          </div>
          <div class="column">
            <button onClick={seeds} class="imageButton">
            <div class="img__wrap">
                <img src={seedsImg} className="Seeds-Image" alt="Seeds" />
                <div class="img__description_layer">
                  <p class="img__description">Seeds</p>
                </div>
            </div>
            </button>
          </div>
        </div>
        </body>
    </div>
  );
}

export default App;
