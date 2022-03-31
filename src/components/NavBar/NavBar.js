import logo from '../../images/plantshedlogo.png';
import Home from '../Home/Home';
import './NavBar.css';

const NavBar = () => {
    return (
        <div id="NavBar">
            <header>
                <center>
                    <img src={logo} class="Logo"/><br/>
                    <button class="NavButton NavButtonO" ><a href='/' id="NavHome">Home</a></button>
                    <button class="NavButton NavButtonG"><a href='/coffee' id="NavCoffee">Coffee</a></button>
                    <button class="NavButton NavButtonO"><a href='/plants' id="NavPlants">Plants</a></button>
                    <button class="NavButton NavButtonG"><a href='/seeds' id="NavSeeds">Seeds</a></button>
                </center>
            </header>   
        </div>
    )
}

export default NavBar;