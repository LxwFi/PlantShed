import logo from '../../images/plantshedlogo.png';
import Home from '../Home/Home';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <header>
                <center>
                    <img src={logo} class="Logo"/><br/>
                    <button class="NavButton NavButtonO" ><a href='/'>Home</a></button>
                    <button class="NavButton NavButtonG"><a href='/coffee'>Coffee</a></button>
                    <button class="NavButton NavButtonO"><a href='/plants'>Plants</a></button>
                    <button class="NavButton NavButtonG"><a href='/seeds'>Seeds</a></button>
                </center>
            </header>   
        </div>
    )
}

export default NavBar;