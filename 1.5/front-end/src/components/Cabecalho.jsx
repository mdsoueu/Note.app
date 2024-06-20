import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/Theme";

import { Container, Switch } from "../style/Style";

import GlobalTheme from "../style/globals";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Style.css'

const Cabecalho = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");

    // useEffect(() => {
    //     fetch('http://localhost:4300/usuarios', {
    //         method: 'GET'
    //     }).then(a => a.json())
    //         .then((a) => console.log(a))
    //         .catch((a) => console.log(a));

    //     fetch('http://localhost:4300/usuarios', {
    //         method: 'POST',
    //         headers: { "Content-type": 'application/json' },
    //         body: JSON.stringify({ descricao: 'teste' })
    //     }).then(a => a.json())
    //         .then((a) => console.log(a))
    //         .catch((a) => console.log(a));
    // }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Container className="container">
            <GlobalTheme />
                <div className="d-flex justify-content-end align-items-center my-3">
                    <Switch onClick={toggleTheme} className="btn btn-outline-secondary">
                        {theme === "dark" ? "Modo dark" : "Modo Light"}
                    </Switch>
                </div>
                {location.pathname !== '/inicio' && location.pathname !== '/login' && location.pathname !== '/cadastrar' && location.pathname !== '/tarefas' && (
                    <div className='tituloCabecalho' onClick={() => navigate('/inicio')} >
                        NOTAS .app
                    </div>
                )}
                <div>
                    <Outlet /> {/* Isso renderizará os componentes filhos */}
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default Cabecalho;