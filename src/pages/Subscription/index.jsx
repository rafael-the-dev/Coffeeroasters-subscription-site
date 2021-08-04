import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/hero.css';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Instructions from '../../components/Instructions';

const Subscription = () => {
    return (
        <>
            <Header />
            <Container fluid as="main" className="main">
                <Container fluid as="section" className="default-hero bg-cover rounded-3 bg-center bg-no-repeat d-flex
                    align-items-center justify-content-center justify-content-sm-start subscription-hero">
                    <div className="d-block default-hero__content">
                        <h1 className="default-hero__title font-weight-9 opacity-9 text-center font-fraunces text-white">About us</h1>
                        <p className="opacity-9 text-white text-center default-hero__description">
                            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from 
                            around the world. We have since been dedicated to bring the perfect cup - from bean to brew -
                            in every shipment.
                        </p>
                    </div>
                </Container>
                <Instructions isSubscriptionPage />
            </Container>
            <Footer />
        </>
    );
};

export default Subscription;