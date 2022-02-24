import React from 'react';
import ReactDOM from 'react-dom';
import './seeds.css';
import NavBar from '../components/NavBar/NavBar';

const seeds = () => {
    return (
    ReactDOM.render(
        <React.StrictMode>
            <NavBar />
            <body>Seeds</body>
        </React.StrictMode>,
        document.getElementById('root')
));
}



export default seeds;