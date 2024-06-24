import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';

const Cadastrar = () => {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const primeiroNomeInputRef = useRef();
    const ultimoNomeInputRef = useRef();
    const idadeInputRef = useRef();
    const emailInputRef = useRef();
    const senhaInputRef = useRef();

    const navigate = useNavigate();

    function adicionaUsuario() {
        const usuario = {
            primeiro_nome: primeiroNomeInputRef.current.value,
            ultimo_nome: ultimoNomeInputRef.current.value,
            idade: parseInt(idadeInputRef.current.value, 10),
            email: emailInputRef.current.value,
            senha: senhaInputRef.current.value,
        };

        if (!usuario.primeiro_nome || !usuario.ultimo_nome || !usuario.idade || !usuario.email || !usuario.senha) {
            console.error('Todos os campos são obrigatórios.');
            return;
        }

        try {
            axios.post('http://localhost:4300/usuarios', usuario)
                .then(response => {
                    setListaUsuarios([...listaUsuarios, response.data]);
                    limparCampos();
                    navigate('/login');
                })
        } catch (error) {
            console.error('Erro ao adicionar usuário:', error);
        }
    }

    function limparCampos() {
        primeiroNomeInputRef.current.value = '';
        ultimoNomeInputRef.current.value = '';
        idadeInputRef.current.value = '';
        emailInputRef.current.value = '';
        senhaInputRef.current.value = '';
    }

    return (
        <div className="containerCadastrar">
            <h2 style={{ padding: '0 25px', fontFamily: 'fantasy', color: 'red' }}> Cadastrar Usuário </h2>

            <form onSubmit={(e) => { e.preventDefault(); adicionaUsuario(); }} className="mb-4">
                <label className="form-label" >Primeiro nome:</label>
                <input type="text" ref={primeiroNomeInputRef} name="primeiroNome" className="form-control" />

                <label className="form-label" >Último nome:</label>
                <input type="text" ref={ultimoNomeInputRef} name="ultimoNome" className="form-control" />

                <label className="form-label" >Idade:</label>
                <input type="text" ref={idadeInputRef} name="idade" className="form-control" />

                <label className="form-label" >Email:</label>
                <input type="email" ref={emailInputRef} name="email" className="form-control" />

                <label className="form-label" >Senha:</label>
                <input type="password" ref={senhaInputRef} name="senha" className="form-control" />
                <br />

                <div className="d-flex justify-content-start mb-2" style={{ gap: '10px' }}>
                    <button className="btn btn-primary" type="submit">Login</button>
                    <button type="button" className="btn btn-primary" onClick={limparCampos}>Cancelar</button>
                </div>
            </form>

            <div className="d-flex justify-content-end mt-2">
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
                <Outlet />
            </div>
        </div>
    );
};

export default Cadastrar;
