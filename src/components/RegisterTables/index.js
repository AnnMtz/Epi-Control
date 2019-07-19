import React, {Component} from 'react';
import Avatar from '../../Assets/icons/avatar.png';
import Return from '../../Assets/img/return.png';
import Add from '../../Assets/icons/add1.png';
import './RegisterTables.scss';
import Header from '../Header';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const data = [
      {name: 'Enero', No_eventos: 0},
      {name: 'Febrero', No_eventos: 3},
      {name: 'Marzo', No_eventos: 2},
      {name: 'Abril', No_eventos: 0},
      {name: 'Mayo', No_eventos: 1},
      {name: 'Junio', No_eventos: 0},
      {name: 'Julio', No_eventos: 3},
      {name: 'Agosto', No_eventos: 0},
      {name: 'Septiembre', No_eventos: 1},
      {name: 'Octubre', No_eventos: 4},
      {name: 'Noviembre', No_eventos: 2},
      {name: 'Diciembre', No_eventos: 0}
];

class RegisterTables extends Component {
    render() {
        const Graph = () => (
            <div>
            {/* <LineChart width={1100} height={400} data={data} margin={{top: 5, right: 5, left: 5, bottom: 5}}> */}
            <LineChart className= "chart" width={600} height={400}  data={data} margin={{top: 10, right: 10, left: 5, bottom: 10}} >
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="1 1"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="No_eventos" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </div>
        )
        return(
            <div className = 'MainContainer'>
        <div className = 'ContainerGraphicInformation'>
        <Header></Header>
            <div className="GraphicInfoContainer">
                <h1 className="GraphicInformationText">Historial de Crisis</h1>
                <div className="ViewGraphic">
                    <div className="Graphic">
                        <Graph></Graph>
                    </div>
                    <div className="GraphAndAddButtons">
                        <button className="GraphicButton">Ver Tabla</button>
                        <img className="AddBtn" src={Add} alt="agregar"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
        )
    }
}

export default RegisterTables;