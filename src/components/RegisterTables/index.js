import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './RegisterTables.scss';
import Header from '../Header';

const RegisterTables = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <Header></Header>
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