import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/icons/logo.svg';
import './styles.css';

const Header = () => {
    return (
        <Container as="header" fluid className="header">
            <Navbar expand="xxl" className="justify-content-between" >
                <Navbar.Brand href="/" className="navbar__brand">
                    <Image src={logo} fluid alt="Logo" className="h-100"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar__toggle" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Subscription</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;