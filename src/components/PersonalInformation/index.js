import React, {Component} from 'react';
import Add from '../../Assets/icons/add1.png';
import Edit from '../../Assets/icons/edit.png'
import './PersonalInformation.scss';
import { Link } from 'react-router-dom';
import Header from '../Header'

class PersonalInformation extends Component{

    constructor (props) {
        super(props);
        this.clickSave = this.clickSave.bind(this);
    };
    
    clickSave = () => {
            console.log('ya entramos');
        this.props.history.push("/InformationSaved")
    }

    render(){
        return(
            <div className = 'MainContainer'>
                <div className = 'ContainerPersonalInformation'>
                <Header></Header>
                    <div className="PersonalInformationInfoContainer">
                        <div className="PersonalInfo">
                        <div className="Title">Información personal
                            {/* <img src={Edit} alt="editar"/> */}
                        </div>
                        <h5 className="Subtext">Complementa tu información personal  para tener todos tus datos.</h5>
                            <div className="Form">
                                <div className="Form-control">
                                    <label className="UserLabel" htmlFor="user">Fecha de <br/>nacimiento</label>
                                    <input className="InputLogin" type="text" id="user"/>
                                </div>
                                <div className="Form-control">
                                    <label className="UserLabel" htmlFor="user">Edad</label>
                                    <input className="InputLogin" type="text" id="user"/>
                                </div>
                                <div className="Form-control">
                                    <label className="UserLabel" htmlFor="user">Dirección</label>
                                    <input className="InputLogin" type="text" id="user"/>
                                </div>
                                <div className="Form-control">
                                    <label className="UserLabel" htmlFor="user">Teléfono</label>
                                    <input className="InputLogin" type="text" id="user"/>
                                </div>
                                <div className="Form-control">
                                    <label className="UserLabel" htmlFor="user">Celular</label>
                                    <input className="InputLogin" type="text" id="user"/>
                                </div>
                            </div>
                            <h3 className="EmergencyText">Contactos de emergencia</h3>
                            <h5 className="EmergencySubtext">Aquí puedes agregar tus contactos de emergencia, editar y/o eliminarlos como tu prefieras.</h5>
                            <Link to="/EmergencyContacts"><img src={Add} className="Addimage" alt="agregar"/></Link>
                                <button className="BtnPersonalInfo" type="button" onClick={this.clickSave}>Guardar</button>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
} 

export default PersonalInformation;