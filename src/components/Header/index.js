import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
    <nav className="Menu">
        <div className="Logo">
                <Link to="/Home" className="h1"><h1>Lepsi</h1></Link>
                <a href="#" className="Btn-menu" id="btn-menu"><img id="btnMenu" src="img/menu.png" alt=""/></a>
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