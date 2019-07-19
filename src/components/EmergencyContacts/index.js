import React, { Component } from 'react';
import Edit from '../../Assets/icons/edit.png';
import './EmergencyContacts.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';

class EmergencyContacts extends Component{

    constructor (props) {
        super(props);
        
        this.state={
            contactName:'',
            contactLastname:'',
            contactRelationship:'',
            concactPhone:'',
            contactCelphone:''
        }

        this.onChange = this.onChange.bind(this);

        this.clickSave = this.clickSave.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
        let target = event.target
        let value = target.value
        this.setState = {
            [target.name]: target.value
        }
    }
    
    clickSave = () => {
            console.log('ya entramos');
        this.props.history.push("/EmergencyContacts")
    }

    render(){

        let {contactName,contactLastname,contactRelationship,concactPhone,contactCelphone}=this.setState;
        return(
            <div className = 'MainContainer'>
            <div className = 'ContainerContactsInformation'>
            <Header></Header>
                <div className="PersonalInformationInfoContainer">
                    <div className="Title">
                        <h1 className="PersonalInformationText">Agregar un contacto de emergencia</h1>
                        <Link to="/EmergencyContacts"><img src={Edit} alt="editar"/></Link>
                    </div>
                    <div className="Form">
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Nombre</label>
                            <input className="InputLogin" type="text" id="user" name="contactName" value={contactName} onChange={this.onChange}/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Apellidos</label>
                            <input className="InputLogin" type="text" id="user" name="contactLastname" value={contactLastname} onChange={this.onChange}/> Años
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Parentesco</label>
                            <input className="InputLogin" type="text" id="user" name="contactRelationship" value={contactRelationship} onChange={this.onChange}/> Años
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Teléfono</label>
                            <input className="InputLogin" type="text" id="user" name="concactPhone" value={concactPhone} onChange={this.onChange}/>
                        </div>
                        <div className="Form-control">
                            <label className="UserLabel" htmlFor="user">Celular</label>
                            <input className="InputLogin" type="text" id="user" name="contactCelphone" value={contactCelphone} onChange={this.onChange}/>
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