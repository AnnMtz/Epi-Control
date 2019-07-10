import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './Medicalrecord.scss';

const MedicalRecord = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
            <header>
                <div className="ContainerImageReturn">
                    <img className="ReturnImg" src={Return} alt='return'/>
                </div> 
                <h1 className="ContactsInformationTitle">EPI-CONTROL</h1>
                <div className="ContainerImageAvatar">
                    <img className="Avatar" src={Avatar} alt='avatar'/>
                </div>
            </header>
            <div className="ContacsInformationInfoContainer">
                <h3 className="ContactsInformationText">REGISTRO MÉDICO</h3>
                <form className="FormContactsInformation">
                    <div className="InfoContainer">
                        <label className="text">Padecimiento:</label>
                            <input className="ContactInfoInput" placeholder="Ingresa tu padecimiento"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Años de diagnostico:</label>
                            <input className="ContactInfoInput" placeholder="Ingresa años de diagnostico"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Medicamento:</label>
                            <input className="ContactInfoInput" placeholder="Ingresa tu medicamento"></input>
                    </div>
                    <div className="InfoContainerMedicalRecord">
                        <label className="textRecords">Dosis:</label>
                            <input className="ContactInfoInputRecords" placeholder="Dosis"></input>
                    </div>
                    <div className="InfoContainerMedicalRecord">
                        <label className="textRecords">Horario:</label>
                            <input className="ContactInfoInputRecords" placeholder="Horario"></input>
                    </div>
                    <div className="InfoContainer">
                        <span>Agenda tus citas médicas</span>
                        <img className="AddBtn" src={Add} alt="agregar"/>
                    </div>
                    <div className="ButtonHomeContainer">
                        <button className="ButtonPersonalInformation">Guardar</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>
)

export default MedicalRecord;