import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './RegisterTables.scss';

const RegisterTables = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <header>
            <nav className="Menu">
                <div class="Logo">
                        <h1>Lepsi</h1>
                        <a href="#" class="Btn-menu" id="btn-menu"><img id="btnMenu" src="img/menu.png" alt=""/></a>
                </div>
                <div className="Enlaces" id="enlaces">
                    <a href="#">Información personal</a>
                    <a href="#">Registro médico</a>
                    <a href="#">Historial de crisis</a>
                </div>
            </nav>
            </header>
            <div className="GraphicInformationInfoContainer">
                <h3 className="GraphicInformationText">GRÁFICA DE REGISTRO DE CRISIS</h3>
                <div className="ViewGraphic">
                    <div className="Graphic">
                        <button className="Graphic">Ver Tabla</button>
                    </div>
                    <div className="AddButton">
                        <img className="AddBtn" src={Add} alt="agregar"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default RegisterTables;