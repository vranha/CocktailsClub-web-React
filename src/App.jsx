import './App.scss';
import { Home, Carta } from "./pages"
import { Header, Footer } from "./components"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Hola</h1>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/">
                <Route index element={<Home />} />
                <Route path="carta" element={<Carta />} />
          </Route>
        </Routes>
      </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
