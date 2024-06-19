import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "../App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/Theme";
import { Container, Switch } from "../style/Style";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div className="d-flex justify-content-end align-items-center my-3">
                    <Switch onClick={toggleTheme} className="btn btn-outline-secondary">
                        {theme === "dark" ? "Modo dark" : "Modo Light"}
                    </Switch>
                </div>
                {location.pathname !== '/inicio' && location.pathname !== '/login' && location.pathname !== '/cadastrar' && location.pathname !== '/tarefas' && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontSize: '150px',
                            fontFamily: 'fantasy',
                            color: 'red'
                        }}
                        onClick={() => navigate('/inicio')}
                    >
                        NOTAS .app
                    </div>
                )}
                <div style={{ paddingTop: '200px' }}> {/* Ajuste o paddingTop conforme necessário */}
                    <Outlet /> {/* Isso renderizará os componentes filhos */}
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default Cabecalho;