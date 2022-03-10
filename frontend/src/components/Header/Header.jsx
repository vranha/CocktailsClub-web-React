import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoCoctel from "../../assets/logoCoctel.png";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={styles.titleNav} onClick={() => navigate("home")}>
            <img className={styles.logoNav} src={logoCoctel} alt="imagen" />{" "}
            Cocktails Club
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Carta
              </Nav.Link>
              <NavDropdown title="Sobre nosotros" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("about")}>Conócenos</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("locate")}>Encuéntranos</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("contact")}>Contáctanos</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
