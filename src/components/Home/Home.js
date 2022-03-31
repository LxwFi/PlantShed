import coffeeImg from '../../images/coffee.jpg';
import plantImg from '../../images/plant.png';
import seedsImg from '../../images/seeds.png';
import logo from '../../images/plantshedlogo.png'
import './Home.css';

function Home() {
  return (
    <div className="Home" id="Home">
      <header className="Home-header">
        <center>
          <img src={logo} className="Logo" alt="logo" />
        </center>
        <p>
          <b>Click an image to navigate.</b> 
        </p>
      </header>
      <body className='Home-body'>
        <div class="row">
          <div class="column">
            <button class="imageButton" id="coffeeButton">
            <a href="./coffee">
            <div class="img__wrap">
              <img src={coffeeImg} className="Coffee-Image" alt="Beans"/>
                <div class="img__description_layer">
                  <p class="img__description">Beans</p>
                </div>
            </div>
            </a>
            </button>
          </div>
          <div class="column">
            <button class="imageButton"  id="plantButton">
            <a href="./plants">
            <div class="img__wrap">
              <img src={plantImg} className="Plants-Image" alt="Plants"/>
                <div class="img__description_layer">
                  <p class="img__description">Plants</p>
                </div>
            </div>
            </a>
            </button>
          </div>
          <div class="column">
            <button class="imageButton" id="seedButton">
            <a href="./seeds">
            <div class="img__wrap">
                <img src={seedsImg} className="Seeds-Image" alt="Seeds" />
                <div class="img__description_layer">
                  <p class="img__description">Seeds</p>
                </div>
            </div>
            </a>
            </button>
          </div>
        </div>
        </body>
    </div>
  );
}

export default Home;
