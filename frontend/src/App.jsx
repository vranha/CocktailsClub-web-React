import "./App.scss";
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
  Reservas,
} from "./pages";
import { Header, Footer, PrivateRoute } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  AuthProvider,
  checkUserSession,
  useAuthDispatch,
  useAuthState,
} from "./context";
import { useEffect } from "react";
import Payment from "./components/Payment/Payment";

// import Bookings from './pages/Bookings/Bookings';

function App() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();
  const { user } = state;

  useEffect(() => {
    checkUserSession(dispatch);
  }, []);

  console.log("app state ->", state);

  return (
    <div className="app">
      <Toaster />
      <Header></Header>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/menu"
          element={user?.role === "ADMIN_ROLE" ? <Order /> : <Menu />}
        />
        <Route path="/about" element={<Conocenos />} />
        <Route path="/locate" element={<Encuentranos />} />
        <Route path="/contact" element={<Contactanos />} />
        <Route path="/orderList" element={<OrderList />} />
        <Route path="/book" element={<Book />} />
        {/* <Route path="/order" element={<PrivateRoute component={<Order />} />} /> */}
        <Route
          path="/bookings"
          element={user?.role === "ADMIN_ROLE" ? <Reservas /> : <Bookings />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate replace to="/" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
