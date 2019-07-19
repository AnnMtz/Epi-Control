import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Menu from "../../Assets/icons/menu.png";

const Header = () => (
    <header>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Tangerine:400,700&display=swap');
        </style>
        <nav className="MenuContainer">
            <div className="LogoContainer">
                <Link to="/Home" className="h1">Lepsi</Link>
            </div>
            <div className="Enlaces is-flex" id="enlaces">
                <Link to="/InformationSaved" className="a">Información personal</Link>
                <Link to="/MedicalRecord" className="a">Registro médico</Link>
                <Link to="/CrisisRecord" className="a">Historial de crisis</Link>
            </div>
        </nav>
    </header>
)

export default Header