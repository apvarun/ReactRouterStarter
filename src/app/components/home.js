import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1>You are home!</h1>
            <Link to='/contact'>Contact me!</Link>
        </div>
    );
}
export default Home;