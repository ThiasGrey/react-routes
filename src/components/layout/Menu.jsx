import { React } from "react";
import './menu.scss'

import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu