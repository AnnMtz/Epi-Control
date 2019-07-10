import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './CrisisRecord.scss';

const CrisisRecord = () => (
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
            <div className="CrisisRecordInformationInfoContainer">
                <h5 className="CrisisRecordInformationText">Registra tus crisis aquí, lleva un control de las mismas</h5>
                <form className="FormCrisisRecordInformation">
                    <div className="InfoContainer">
                        <label className="text">Día:<br/></label>
                            <input className="ContactInfoInput" placeholder="Ingresa el día"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Hora:<br/></label>
                            <input className="ContactInfoInput" placeholder="Ingresa la hora"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Duración:<br/></label>
                            <input className="ContactInfoInput" placeholder="Ingresa la duración aproximada"></input>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Tipo:<br/></label>
                            <input className="ContactInfoInput" placeholder="Ingresa el tipo"></input>
                    </div>
                    <div className="AddButton">
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

export default CrisisRecord;