import coffee from "../../pages/coffee";
import plants from "../../pages/plants";
import seeds from "../../pages/seeds";
import App from "../../App";
import logo from '../../images/plantshedlogo.png';

const NavBar = () => {
    return (
        <div>
            <header>
                <center>
                    <img src={logo}/><br/>
                    <button onClick={App}>Home</button>
                    <button onClick={coffee}>Coffee</button>
                    <button onClick={plants}>Plants</button>
                    <button onClick={seeds}>Seeds</button>
                </center>
            </header>
        </div>
    )
}

export default NavBar;