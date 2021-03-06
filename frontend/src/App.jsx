import "./App.scss";
import {
  Home,
  Menu,
  Order,
  Bookings,
  Conocenos,
  Login,
  Register,
  Encuentranos,
  Contactanos,
  Reservas,
  UserCocktel,
  MisReservas,
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
        {/* <Route path="/order" element={<PrivateRoute component={<Order />} />} /> */}
        <Route
          path="/bookings"
          element={user?.role === "ADMIN_ROLE" ? <Reservas /> : <Bookings />}
        />
        <Route
          path="/myBookings" element={user ? <MisReservas /> : <Navigate replace to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate replace to="/" />}
        />
        <Route path="/usercocktel" element={<UserCocktel/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
