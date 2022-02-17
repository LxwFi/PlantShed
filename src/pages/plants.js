import React from 'react';
import ReactDOM from 'react-dom';
import './plants.css';
import NavBar from '../components/NavBar/NavBar';

const plants = () => {
    return (
    ReactDOM.render(
        <React.StrictMode>
            <NavBar />
        </React.StrictMode>,
        document.getElementById('root')
));
}



export default plants;