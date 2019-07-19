import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700|Tangerine:400,700&display=swap');
        </style>
        <nav className="MenuContainer">
            <div class="LogoContainer">
                    <Link to="/Home" className="h1">Lepsi</Link>
                    {/* <a href="#" class="Btn-menu" id="btn-menu"><img id="btnMenu" src="img/menu.png" alt="Logo"/></a> */}
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