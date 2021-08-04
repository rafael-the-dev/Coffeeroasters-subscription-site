import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/hero.css';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import AddressCard from '../../components/AddressCard';

const About = () => {
    return (
        <>
            <Header />
            <Container fluid as="main" className="main" >
                <Container fluid as="section" className="default-hero bg-cover rounded-3 bg-center bg-no-repeat d-flex
                    align-items-center justify-content-center justify-content-sm-start hero">
                    <div className="d-block default-hero__content">
                        <h1 className="default-hero__title font-weight-9 opacity-9 text-center font-fraunces text-white">About us</h1>
                        <p className="opacity-9 text-white text-center default-hero__description">
                            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from 
                            around the world. We have since been dedicated to bring the perfect cup - from bean to brew -
                            in every shipment.
                        </p>
                    </div>
                </Container>
                <Container fluid as="section" className="mt-5 commitment align-items-sm-center d-sm-flex flex-sm-row">
                    <Container fluid className="bg-cover rounded-3 bg-center bg-no-repeat commitment__image"></Container>
                    <Container fluid className="mt-5 commitment__content">
                        <h2 className=" font-weight-9 opacity-9 about-title text-center font-fraunces commitment__title">Our commitment</h2>
                        <p className="mt-4 text-center about-description commitment__description">
                            We’re built on a simple mission and a commitment to doing good along the way. We want to make it 
                            easy for you to discover and brew the world’s best coffee at home. It all starts at the source. 
                            To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand 
                            the challenges and opportunities in each of these places. We collaborate with exceptional coffee 
                            growers and empower a global community of farmers through with well above fair-trade benchmarks. 
                            We also offer training, support farm community initiatives, and invest in coffee plant science. 
                            Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to 
                            their native growing region.
                        </p>
                    </Container>
                </Container>
                <Container fluid as="section" className="pt-5 pb-3 rounded-3 position-relative uncompromising">
                    <Container fluid className="bg-cover rounded-3 bg-center bg-no-repeat position-absolute
                        top-0 start-50 translate-middle uncompromising__image"></Container>
                    <Container fluid className="mt-5 text-white py-4 uncompromising__content">
                        <h2 className=" font-weight-9 opacity-9 text-center font-fraunces about-title  uncompromising__title">
                            Uncompromising quality</h2>
                        <p className="mt-4 text-center opacity-8 about-description uncompromising__description">
                            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, 
                            on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag 
                            of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly 
                            coffee, so that brewing is easy and enjoyable.
                        </p>
                    </Container>
                </Container>
                <Container fluid as="section"  className="headquartes mt-5 pt-5">
                    <h2 className="font-weight-9  opacity-9 text-center font-fraunces headquartes__title">Our headquarters</h2>
                    <Row className="mt-4">
                        <Col xs={12} sm={4} className="headquartes__column">
                            <AddressCard
                                title="United Kingdom">
                                68  Asfordby Rd<br />Alcaston<br />SY6 1YA<br />+44 1241 918425
                            </AddressCard>
                        </Col>
                        <Col xs={12} sm={4} className="headquartes__column">
                            <AddressCard
                                title="Canada">
                                1528  Eglinton Avenue<br />Toronto<br />Ontario M4P 1A6<br />+1 416 485 2997
                            </AddressCard>
                        </Col>
                        <Col xs={12} sm={4} className="headquartes__column">
                            <AddressCard
                                title="Australia">
                                36 Swanston Street<br />Kewell<br />Victoria<br />+61 4 9928 3629
                            </AddressCard>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default About;