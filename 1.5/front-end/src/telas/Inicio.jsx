import React from 'react';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
    return (
        <div className='containerInicio' style={{ display: 'block' }}>

            <div style={{ paddingLeft: '110px' }}>
                <h1 style={{ fontFamily: 'fantasy', color: 'grey' }}>Menu</h1>
                <img src="https://cdn.icon-icons.com/icons2/2104/PNG/512/agenda_icon_129263.png" style={{ height: '100px' }} alt="bloco" className="mb-4" />
            </div>

            <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-primary" style={{ margin: '0 10px', cursor: 'pointer' }}>
                    <Link to="/cadastrar" style={{ color: "black", textDecoration: 'none' }} className="mx-2">
                        <i className="bi bi-person-add"> Cadastrar</i>
                    </Link>
                </button>

                <button className="btn btn-secondary" style={{ margin: '0 10px', cursor: 'pointer' }}>
                    <Link to={'/login'} style={{ color: "black", textDecoration: 'none' }} className="mx-2">
                        <i className="bi bi-person-circle"> Login</i>
                    </Link>
                </button>

                <button className="btn btn-danger" style={{ margin: '0 10px', cursor: 'pointer' }}>
                    <Link to={'/'} style={{ color: "black", textDecoration: 'none' }} className="mx-2">
                        <i className="bi bi-house"></i>
                    </Link>
                </button>
            </div>

            <Outlet />
        </div>
    )

}

export default Inicio;