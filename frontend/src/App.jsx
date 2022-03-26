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
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context';


// import Bookings from './pages/Bookings/Bookings';

function App() {

    return (
        <AuthProvider>
            <div className="app">
                <Toaster />               
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
                <Footer></Footer>
            </div>
        </AuthProvider>
    );
}

export default App;
