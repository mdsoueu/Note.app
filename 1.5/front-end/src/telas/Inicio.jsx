import React from 'react';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
    return (
        <div style={{ display: 'block' }}>

            <div style={{ paddingLeft: '75px' }}>
                <h1 style={{ fontFamily: 'fantasy', color: 'grey' }}>Menu</h1>
                <img src="https://cdn.icon-icons.com/icons2/2104/PNG/512/agenda_icon_129263.png" style={{ height: '100px' }} alt="bloco" className="mb-4" />
            </div>

            <div className="d-flex justify-content-center mb-2">
                <Link to={'/cadastrar'} className="mx-2">
                    <input type="button" value="cadastrar" className="btn btn-primary" />
                </Link>
                <Link to={'/login'} className="mx-2">
                    <input type="button" value="login" className="btn btn-secondary" />
                </Link>
                <Link to={'/'} className="mx-2">
                    <input type="button" value="voltar" className="btn btn-danger" />
                </Link>
            </div>

            <Outlet />
        </div>
    )

}

export default Inicio;