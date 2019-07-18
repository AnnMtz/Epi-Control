import React, { Component } from 'react';
import Add from '../../Assets/icons/add1.png';
import Edit from '../../Assets/icons/edit.png';
import './Medicalrecord.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';

class MedicalRecord extends Component{

    constructor (props) {
        super(props);
        this.clickSave = this.clickSave.bind(this);
    };
    
    clickSave = () => {
            console.log('ya entramos');
        this.props.history.push("/MedicalRecord")
    }

    render(){
        return(
            <div className = 'MainContainer'>
        <div className = 'ContainerContactsInformation'>
        <Header></Header>
            <div className="PersonalInformationInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Registro Médico</h1>
                    <Link to="/MedicalRecord"><img src={Edit} alt="editar"/></Link>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Diagnóstico</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Años de diagnóstico</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Medicamento</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Dosis</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Horario</label>
                        <input className="InputLogin" type="text" id="user"/>
                    </div>
                </div>
                <div className="Agenda">
                    <h3>Agenda tus citas medicas</h3>
                    <Link to="/ScheduleAppointment"><img src={Add} alt="agregar"/></Link>
                </div>

                <button className="BtnPersonalInfo" type="button" onClick={this.clickSave}>Guardar</button>
            </div>
        </div>
    </div>
        )
    }
} 

export default MedicalRecord;