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

        this.state={
            medicalDiagnostic:'',
            diagnosisYears:'',
            medicine:'',
            medicamentationDose:'',
            medicationHours:''
        }
        this.onChange = this.onChange.bind(this);
        this.clickSave=this.clickSave.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        let target = event.target
        let value = target.value
        this.setState({
            [target.name]: value
        })
    }
    
    clickSave () {

        var url = 'https://lepsi-backend.appspot.com/medicalrecord';
        let {medicalDiagnostic,diagnosisYears,medicine,
        medicamentationDose,medicationHours}=this.state;

        let medicalRecord={
            medicalDiagnostic:medicalDiagnostic,
            diagnosisYears:diagnosisYears,
            medicine:medicine,
            medicamentationDose:medicamentationDose,
            medicationHours:medicationHours
        }

        console.log(medicalRecord);

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(medicalRecord),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response =>{ 
            console.log('Success:', response)
            this.props.history.push("/Home")
        })
        .catch(error => console.error('Error:', error));        
    }

    render(){

        let {medicalDiagnostic,diagnosisYears,medicine,medicamentationDose,medicationHours}=this.setState;
        return(
            <div className = 'MainContainer'>
        <div className = 'ContainerMedicalRecordInformation'>
        <Header></Header>
            <div className="MedicalRecordInfoContainer">
                <div className="Title">
                    <h1 className="PersonalInformationText">Registro Médico</h1>
                    <Link to="/MedicalRecord"><img src={Edit} alt="editar"/></Link>
                </div>
                <div className="Form">
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Diagnóstico</label>
                        <input className="InputLogin" type="text" id="user" name="medicalDiagnostic" value={medicalDiagnostic} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Años de diagnóstico</label>
                        <input className="InputLogin" type="text" id="user" name="diagnosisYears" value={diagnosisYears} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Medicamento</label>
                        <input className="InputLogin" type="text" id="user" name="medicine" value={medicine} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Dosis</label>
                        <input className="InputLogin" type="text" id="user" name="medicamentationDose" value={medicamentationDose} onChange={this.onChange}/>
                    </div>
                    <div className="Form-control">
                        <label className="UserLabel" htmlFor="user">Horario</label>
                        <input className="InputLogin" type="text" id="user" name="medicationHours" value={medicationHours} onChange={this.onChange}/>
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