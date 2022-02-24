import React from 'react';
import ReactDOM from 'react-dom';
import './coffee.css';
import NavBar from '../components/NavBar/NavBar';

const coffee = () => {
    return (
    ReactDOM.render(
        <React.StrictMode>
            <NavBar />
            <body>Coffee</body>
        </React.StrictMode>,
        document.getElementById('root')
)
);

}



export default coffee;