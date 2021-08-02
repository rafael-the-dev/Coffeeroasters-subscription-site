import { Container, Image, Navbar } from 'react-bootstrap';
import './styles.css';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand expand>
                    <Image src="../../" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;