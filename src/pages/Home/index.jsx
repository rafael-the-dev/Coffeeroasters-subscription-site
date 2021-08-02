import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../components/Footer';
import './styles.css';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Container as="section">
                    <Row xs={12}>
                        <Col xs={12} sm={5} >
                            <h1 className="">
                                
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default Home;