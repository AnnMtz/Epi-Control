import React, { Component } from 'react';
import Edit from '../../Assets/icons/edit.png';
import './EmergencyContacts.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';

class EmergencyContacts extends Component{

    constructor (props) {
        super(props);
        this.clickSave = this.clickSave.bind(this);
    };
    
    clickSave = () => {
            console.log('ya entramos');
        this.props.history.push("/EmergencyContacts")
    }

    render(){
        return(
            <div className = 'MainContainer'>
            <div className = 'ContainerEmergencyContactsInformation'>
            <Header></Header>
                <div className="EmergencyContactsInfoContainer">
                    <div className="Title">
                        <h1 className="PersonalInformationText">Agregar un contacto de emergencia</h1>
                        <Link to="/EmergencyContacts"><img src={Edit} alt="editar"/></Link>
                    </div>
                    <div className="Form">
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Nombre</label>
                            <input className="InputLogin" type="text" id="firstName"/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Apellidos</label>
                            <input className="InputLogin" type="text" id="secondName"/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Parentesco</label>
                            <input className="InputLogin" type="text" id="kinship"/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Teléfono</label>
                            <input className="InputLogin" type="text" id="phone"/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Celular</label>
                            <input className="InputLogin" type="text" id="mobile"/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Dirección</label>
                            <input className="InputLogin" type="text" id="address"/>
                        </div>
                    </div>
    
                    <button className="BtnPersonalInfo" type="button" onClick={this.clickSave}>Guardar</button>
                </div>
            </div>
        </div>
        )
    }
} 

export default EmergencyContacts;