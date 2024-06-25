import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(''); // Alterado para 'senha' ao invés de 'password'
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            console.log("Tentativa de login com", { email, senha });
            const response = await axios.post('http://localhost:4300/login', {
                email, senha,
            });

            if (response.status === 200) {
                console.log('Login bem-sucedido');
                navigate('/tarefas');
            }
        } catch (error) {
            console.error('Login falhou', error);
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
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <div style={{ padding: "0 15px" }}>
                <Link to={'/cadastrar'} className="mx-2">
                    <input type="button" value="cadastrar" className="btn btn-secondary" />
                </Link>
                <Link to={'/'}>
                    <input type="button" value="voltar" className="btn btn-danger" />
                </Link>
            </div>

            <Outlet />
        </div>
    );
}

export default Login;