import './App.scss';
import { Home, Carta, LaCocteleria, Contacto, Login, Pedidos, Pedir, Register, Reservar, Reservas } from './pages';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

//fasdfsa

function App() {
    return (
        <div className="app">
            <Header></Header>
            <h1>Hola</h1>
            <Router>
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="carta" element={<Carta />} />
                        <Route path="laCocteleria" element={<LaCocteleria />} />
                        <Route path="contacto" element={<Contacto />} />
                        <Route path="pedir" element={<Pedir />} />
                        <Route path="pedidos" element={<Pedidos />} />
                        <Route path="reservar" element={<Reservar />} />
                        <Route path="reservas" element={<Reservas />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
