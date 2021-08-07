import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './styles.css';

const Header = () => {
    return (
        <Container as="header" fluid className="header">
            <Navbar expand="sm" className="justify-content-between" >
                <Navbar.Brand as={Link} to="/" className="navbar__brand">
                    <Image src={logo} fluid alt="Logo" className="d-block h-100"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar__toggle" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" className="font-weight-9 font-fraunces">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="font-weight-9 font-fraunces">About</Nav.Link>
                        <Nav.Link as={Link} to="/plan" className="font-weight-9 font-fraunces">Subscription</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;