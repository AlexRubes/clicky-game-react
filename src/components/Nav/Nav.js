import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav>
        <ul>
            <li>
                <a>Clicky-Game!{props.title}</a>
            </li>

            <li>Your Score: {props.score}</li>

            <li>Top Score: {props.topScore}</li>
        </ul>
    </nav>
)

export default Nav;