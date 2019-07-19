import React, {Component} from 'react';
import Add from '../../Assets/icons/add1.png';
import Delete from '../../Assets/icons/delete.png';
import Edit from '../../Assets/icons/edit.png';
import './InformationSaved.scss';
import { Link } from 'react-router-dom';
import Header from "../Header";

class InformationSaved extends Component {
    constructor(props){
        super(props);

        this.state={
            birthdatePacient: '',
            agePacient: '',
            addressPacient: '',
            phonePacient: '',
            celPhonePacient: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    // const [state,setState] = useState({birthdatePacient,agePacient,addressPacient,phonePacient,celPhonePacient})

    onChange(event) {
        console.log(event.target.value);
        let target = event.target
        let value = target.value
        this.setState = {
            [target.name]: target.value
        }
    }

    // function onSubmit(event) {
    //     event.preventDefault();
    //     props.onSubmit(state);
    // }

    render(){

        let {birthdatePacient, agePacient, addressPacient, phonePacient, celPhonePacient}=this.setState;

        return (
            <div className="MainContainer">
                <div className="ContainerPersonalInformation">
                <Header></Header>
                    <div className="PersonalInformationInfoContainer">
                        <div className="Title">
                            <h1 className="PersonalInformationText">Información personal</h1>
                            <Link to="/PersonalInformation"><img src={Edit} alt="editar"/></Link>
                        </div>
                        <h5 className="Subtext">Complementa tu información personal  para tener todos tus datos.</h5>
                        <div className="Form">
                            <div className="Form-control">
                                <label className="UserLabel" htmlFor="user">Fecha de <br/>nacimiento</label>
                                <input className="InputLogin" type="text" id="user" name="birthdatePacient" value={birthdatePacient} onChange={this.onChange}/>
                            </div>
                            <div className="Form-control">
                                <label className="UserLabel" htmlFor="user">Edad</label>
                                <input className="InputLogin" type="text" id="user" name="agePacient" value={agePacient} onChange={this.onChange}/> Años
                            </div>
                            <div className="Form-control-address">
                                <label className="UserLabel" htmlFor="user">Dirección</label>
                                <input className="InputAddress" type="text" id="user" name="addressPacient" value={addressPacient} onChange={this.onChange}/>
                            </div>
                            <div className="Form-control">
                                <label className="UserLabel" htmlFor="user">Teléfono</label>
                                <input className="InputLogin" type="text" id="user" name="phonePacient" value={phonePacient} onChange={this.onChange}/>
                            </div>
                            <div className="Form-control">
                                <label className="UserLabel" htmlFor="user">Celular</label>
                                <input className="InputLogin" type="text" id="user" name="celPhonePacient" value={celPhonePacient} onChange={this.onChange}/>
                            </div>
                        </div>
                        <h3 className="EmergencyText">Contactos de emergencia</h3>
                        <h5 className="EmergencySubtext">Aquí puedes agregar tus contactos de emergencia, editar y/o eliminarlos como tu prefieras.</h5>
                        <Link to="/EmergencyContacts"><img src={Add} className="Addimage" alt="agregar"/></Link>
                        {/* <a href="#"><img src={Add} className="Addimage" alt="agregar"/></a> */}
        
                        {/* <button className="BtnPersonalInfo" type="button">Enviar</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default InformationSaved;