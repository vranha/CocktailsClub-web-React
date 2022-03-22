import './App.scss';
import {
    Home,
    Menu,
    Order,
    Book,
    Bookings,
    Conocenos,
    Login,
    Register,
    OrderList,
    Encuentranos,
    Contactanos,
} from './pages';
import { Header, Footer, PrivateRoute } from './components';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


// import Bookings from './pages/Bookings/Bookings';

function App() {
    return (
        <div className="app">
            <Toaster />
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
                    <Route path="/bookings" element={<PrivateRoute component={<Bookings />} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
