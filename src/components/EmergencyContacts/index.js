import React from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add.png';
import Delete from '../../Assets/icons/delete.png';
import Edit from '../../Assets/icons/edit.png';
import './EmergencyContacts.scss';

const EmergencyContacts = () => (
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
                <h3 className="ContactsInformationText">CONTACTOS DE EMERGENCIA</h3>
                {/* <h5 className="PersonalInformationSubtext">Complementa tu información personal para tener todos tus datos completos.</h5> */}
                <form className="FormContactsInformation">
                    <div className="InfoContainer">
                        <label className="text">Nombre</label>
                        <input className="ContactInfoInput" placeholder="Ingresa el nombre"></input>
                        <div className="ContainerIcons">
                            <img className="Icons" src={Delete} alt='delete'/>
                            <img className="Icons" src={Edit} alt='edit'/>
                        </div>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Apellidos</label>
                            <input className="ContactInfoInput" placeholder="Ingresa sus apellidos"></input>
                            <div className="ContainerIcons">
                                <img className="Icons" src={Delete} alt='delete'/>
                                <img className="Icons" src={Edit} alt='edit'/>
                            </div>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Parentesco</label>
                            <input className="ContactInfoInput" placeholder="Ingresa el perentesco"></input>
                            <div className="ContainerIcons">
                                <img className="Icons" src={Delete} alt='delete'/>
                                <img className="Icons" src={Edit} alt='edit'/>
                            </div>
                    </div>
                    <div className="InfoContainer">
                        <label className="text">Teléfono</label>
                            <input className="ContactInfoInput" placeholder="Ingresa el número telefónico"></input>
                            <div className="ContainerIcons">
                                <img className="Icons" src={Delete} alt='delete'/>
                                <img className="Icons" src={Edit} alt='edit'/>
                            </div>
                    </div>
                    <div className="ButtonHomeContainer">
                        <button className="ButtonPersonalInformation">Guardar</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>
)

export default EmergencyContacts;