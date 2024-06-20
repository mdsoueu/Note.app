import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            console.log("Login attempt with", { email, password });
            const response = await axios.post('http://localhost:4300/login', {
                email, password,
            });

            if (response.status === 200) {
                console.log('Login successful');
                navigate('/tarefas');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };
   
    return (
        // <div className="container mt-5">
        <div style={{display: 'block'}}>
            <h2 style={{ padding: '0 60px', fontFamily: 'fantasy', color: 'red'}}>Login</h2>

            <form onSubmit={handleLogin} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>

                <button type="submit">Login</button>

                <div className="d-flex justify-content-between">
                    <Link to={'/tarefas'}>
                        <input type="button" value="enviar" className="btn btn-primary" />
                    </Link>
                </div> 
            </form>

            {/* <div className="d-flex justify-content-end mb-4"> */}
            <div style={{padding: "0 15px"}}>
                <Link to={'/cadastrar'} className="mx-2">
                    <input type="button" value="cadastrar" className="btn btn-secondary"/>
                </Link>
                <Link to={'/'}>
                    <input type="button" value="voltar" className="btn btn-danger"/>
                </Link>
            </div>

            <Outlet />
        </div>
    )
}


export default Login