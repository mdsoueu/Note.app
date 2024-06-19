import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="container text-center">
            <h1 className="my-4" style={{ fontFamily: 'fantasy', color: 'grey' }}>Menu</h1>
            
            <img src="https://cdn.icon-icons.com/icons2/2104/PNG/512/agenda_icon_129263.png" 
                 style={{ height: '100px' }} 
                 alt="bloco" 
                 className="mb-4" />
            
            <div className="d-flex justify-content-center mb-2">
                <Link to={'/cadastrar'} className="mx-2">
                    <input type="button" value="cadastrar" className="btn btn-primary" style={{ width: '100px', height: '40px' }} />
                </Link>
                
                <Link to={'/login'} className="mx-2">
                    <input type="button" value="login" className="btn btn-secondary" style={{ width: '100px', height: '40px' }} />
                </Link>
                
                <Link to={'/'} className="mx-2">
                    <input type="button" value="voltar" className="btn btn-danger" style={{ width: '100px', height: '40px' }} />
                </Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Inicio;