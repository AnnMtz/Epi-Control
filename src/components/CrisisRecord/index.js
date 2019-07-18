import React from 'react';
import './CrisisRecord.scss';
import Header from '../Header'

const CrisisRecord = () => (
    <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <Header></Header>
            <div className="PersonalInformationInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Registra tus crisis aquí, lleva un control de
                    las mismas</h1>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Día</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Hora</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Duración</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Tipo</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
                <button className="BtnPersonalInfo" type="button">Guardar</button>
                </div>
        </div>
    </div>
)

export default CrisisRecord;