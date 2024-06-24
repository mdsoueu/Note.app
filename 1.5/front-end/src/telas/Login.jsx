import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            console.log("Login attempt with", { email, senha });
            const response = await axios.post('http://localhost:4300/login', {
                email, senha,
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
        <div style={{ display: 'block' }}>
            <h2 style={{ padding: '0 60px', fontFamily: 'fantasy', color: 'red' }}>Login</h2>

            <form onSubmit={handleLogin} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input type="password" value={senha} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                </div>

                    <button className="btn btn-primary" type="submit">Login</button>
            </form>

            <div style={{ padding: "0 15px" }}>
                <button className="btn btn-primary" style={{ margin: '0 10px', cursor: 'pointer' }}>
                    <Link to="/cadastrar" style={{ color: "black", textDecoration: 'none' }} className="mx-2">
                        <i className="bi bi-person-add"> Cadastrar</i>
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


export default Login