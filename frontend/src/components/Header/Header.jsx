import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logoCoctel from '../../assets/logoCoctel.png';
import styles from './Header.module.scss';
import { logoutPost } from '../../context/actions/auth.actions';
import { useAuthDispatch, useAuthState } from '../../context';
import { useState } from 'react';


export default function Header() {
    const dispatch = useAuthDispatch();
    const state = useAuthState();
    const { user, error, loading } = state;

    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar expanded={expanded} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  className={styles.titleNav}  onClick={() => {navigate('home') ; setExpanded(false)} }>
                        <img className={styles.logoNav} src={logoCoctel} alt="imagen" /> Cocktails Club
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" onClick={() => setExpanded(false)}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/menu" onClick={() => setExpanded(false)}>
                                Carta
                            </Nav.Link>
                            <Nav.Link as={Link} to="/bookings" onClick={() => setExpanded(false)}>
                                Reservas
                            </Nav.Link>
                            <NavDropdown menuVariant="dark" title="Sobre nosotros" id="collasible-nav-dropdown">
                                {/* <NavDropdown.Item onClick={() => {navigate('about') ; setExpanded(false)} }>Conócenos</NavDropdown.Item> */}
                                <NavDropdown.Item onClick={() => {navigate('locate') ; setExpanded(false)}}>Encuéntranos</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {navigate('contact') ; setExpanded(false)}}>Contáctanos</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                            </NavDropdown>
                        </Nav>
                        <Nav>
                        {user ? <Nav.Link as={Link} to="/myBookings" onClick={() => setExpanded(false)}>
                                Mis Reservas
                            </Nav.Link> : ''}
                           {/* <button onClick={() => logoutPost(dispatch)} > logout </button> */}
                            { user ? (
                                <Nav.Link as={Link} to="/home" onClick={() => logoutPost(dispatch)}>
                                    Logout
                                </Nav.Link>
                            ) : (
                            <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)} >
                                Login
                            </Nav.Link> )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
