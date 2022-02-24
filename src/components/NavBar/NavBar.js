import coffee from "../../pages/coffee";
import plants from "../../pages/plants";
import seeds from "../../pages/seeds";
import logo from '../../images/plantshedlogo.png';
import home from "../..";
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <header>
                <center>
                    <img src={logo} class="Logo"/><br/>
                    <button onClick={home} class="NavButton NavButtonO" >Home</button>
                    <button onClick={coffee} class="NavButton NavButtonG">Coffee</button>
                    <button onClick={plants} class="NavButton NavButtonO">Plants</button>
                    <button onClick={seeds} class="NavButton NavButtonG">Seeds</button>
                </center>
            </header>
        </div>
    )
}

export default NavBar;