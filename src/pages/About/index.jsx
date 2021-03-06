import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/hero.css';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import AddressCard from '../../components/AddressCard';
import { useEffect } from 'react';
import Hero from '../../components/Hero';
import P from '../../components/P';
import { H1, H2 } from '../../components/Heading';
import { useRef } from 'react';

const About = () => {
    const aboutMainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ ]);

    return (
        <>
            <Header mainRef={aboutMainRef} />
            <Container fluid as="main" ref={aboutMainRef} className="main" > 
                <Hero className="about-hero">
                    <H1 className="default-hero__title">About us</H1>
                    <P
                        text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from 
                            around the world. We have since been dedicated to bring the perfect cup - from bean to brew -
                            in every shipment." 
                        className="text-white text-center mt-4 default-hero__description"
                    />
                </Hero>
                <Container fluid as="section" className="mt-5 commitment align-items-sm-center d-sm-flex flex-sm-row">
                    <Container fluid className="bg-cover rounded-3 bg-center bg-no-repeat commitment__image"></Container>
                    <Container fluid className="mt-5 commitment__content">
                        <H2 className="about-title text-black commitment__title">Our commitment</H2>
                        <P 
                            text="We’re built on a simple mission and a commitment to doing good along the way. We want to make it 
                                easy for you to discover and brew the world’s best coffee at home. It all starts at the source. 
                                To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand 
                                the challenges and opportunities in each of these places. We collaborate with exceptional coffee 
                                growers and empower a global community of farmers through with well above fair-trade benchmarks. 
                                We also offer training, support farm community initiatives, and invest in coffee plant science. 
                                Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to 
                                their native growing region."
                            className="mt-4 text-black commitment__description"
                        />
                    </Container>
                </Container>
                <Container fluid as="section" className="pt-5 pb-3 rounded-3 position-relative uncompromising">
                    <Container fluid className="bg-cover rounded-3 bg-center bg-no-repeat position-absolute
                        top-0 start-50 translate-middle uncompromising__image"></Container>
                    <Container fluid className="mt-5 text-white py-4 uncompromising__content">
                        <H2 className="about-title  uncompromising__title">
                            Uncompromising quality</H2>
                        <P 
                            text="Although we work with growers who pay close attention to all stages of harvest and processing, we employ, 
                            on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag 
                            of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly 
                            coffee, so that brewing is easy and enjoyable."
                            className="mt-4 opacity-8  uncompromising__description"
                        />
                    </Container>
                </Container>
                <Container fluid as="section"  className="headquartes mt-5 pt-5">
                    <H2 className="text-black headquartes__title">Our headquarters</H2>
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