import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "./Style.css"

const Login = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ fontFamily: 'fantasy', color: 'grey' }}>Login</h2>

            <form style={{ fontFamily: 'fantasy', color: 'grey' }} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">User:</label>
                    <input type="text" name="nome" className="form-control" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input type="password" id="senha" className="form-control" />
                </div>
                
                <div className="d-flex justify-content-between">
                    <Link to={'/tarefas'}>
                        <input type="button" value="enviar" className="btn btn-primary" style={{ width: '60px', height: '30px' }} />
                    </Link>
                </div>
            </form>

            <div className="d-flex justify-content-end mb-4">
                <Link to={'/cadastrar'} className="mx-2">
                    <input type="button" value="cadastrar" className="btn btn-secondary" style={{ width: '100px', height: '40px' }} />
                </Link>

                <Link to={'/'}>
                    <input type="button" value="voltar" className="btn btn-danger" style={{ width: '100px', height: '40px' }} />
                </Link>
            </div>

            <Outlet />
        </div>
    )
}


export default Login