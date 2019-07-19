import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './RegisterTables.scss';
import Header from '../Header';

const RegisterTables = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerGraphicInformation'>
        <Header></Header>
            <div className="GraphicInfoContainer">
                <h1 className="GraphicInformationText">Historial de Crisis</h1>
                <div className="ViewGraphic">
                    <div className="Graphic">
                        
                    </div>
                    <div className="GraphAndAddButtons">
                        <button className="GraphicButton">Ver Tabla</button>
                        <img className="AddBtn" src={Add} alt="agregar"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default RegisterTables;