import './App.scss';
import { Home, Menu, Order, Book, Conocenos, Login, Register, OrderList, Encuentranos, Contactanos } from './pages';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Bookings from './pages/Bookings/Bookings';

//fasdfsa

function App() {
    return (
        <div className="app">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<Conocenos />} />
                    <Route path="/locate" element={<Encuentranos />} />
                    <Route path="/contact" element={<Contactanos />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/orderList" element={<OrderList />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
