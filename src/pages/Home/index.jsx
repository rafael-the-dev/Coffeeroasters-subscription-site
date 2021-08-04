import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import granEspressoImage from '../../assets/images/home/image-gran-espresso.png';
import './styles.css';
import CollectionCard from '../../components/CollectionCard';
import ServiceCard from '../../components/ServiceCard';
import InstructionCard from '../../components/InstructionCard';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Container as="main" fluid className="main">
                <Container as="section" fluid className="rounded-3 bg-cover bg-no-repeat bg-center home-hero d-flex align-items-center
                ">
                    <div className="d-flex flex-column justify-center text-white align-items-center
                        align-items-sm-start text-center home-hero__content" >
                        <h1 className="display-1 font-weight-9 font-fraunces home-hero__title">
                            Great coffee<br/>made simple
                        </h1>
                        <p className="opacity-75 mt-3 home-hero__description">
                            Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                            coffees from our best roasters delivered directly to your door, at your schedule.
                        </p>
                        <Link to="/" className="text-white mt-5 font-fraunces rounded-3 text-decoration-none  home-hero__link">
                            Create your plan
                        </Link>
                    </div>
                </Container>
                <Container as="section" fluid className="py-5 collections">
                    <h2 className="text-center font-weight-9 font-fraunces collection__title">our collection</h2>
                    <Row className="mt-3">
                        <Col xs={12} md={6} lg={3}>
                            <CollectionCard
                                image={granEspressoImage}
                                title="Gran Expresso" 
                                description="Light and flavorful blend with cocoa and black pepper for an intense experience"
                            />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <CollectionCard
                                image={granEspressoImage}
                                title="Gran Expresso" 
                                description="Light and flavorful blend with cocoa and black pepper for an intense experience"
                            />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <CollectionCard
                                image={granEspressoImage}
                                title="Gran Expresso" 
                                description="Light and flavorful blend with cocoa and black pepper for an intense experience"
                            />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <CollectionCard
                                image={granEspressoImage}
                                title="Gran Expresso" 
                                description="Light and flavorful blend with cocoa and black pepper for an intense experience"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container as="section" fluid className="py-5 rounded-3 text-white position-relative services">
                    <h2 className="text-center font-weight-9 font-fraunces services__title">Why choose us?</h2>
                    <p className="mt-4 text-center services__description">
                        A large part of our role is choosing which particular coffees will be featured  in our range. 
                        This means working closely with the best coffee growers to give you a more impactful 
                        experience on every level.
                    </p>
                    <Row className="mt-5">
                        <Col xs={12} md={4} className="services__column">
                            <ServiceCard
                                title="Best quality"
                                description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
                            />
                        </Col>
                        <Col xs={12} md={4} className="services__column">
                            <ServiceCard
                                title="Best quality"
                                description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
                            />
                        </Col>
                        <Col xs={12} md={4} className="services__column">
                            <ServiceCard
                                title="Best quality"
                                description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
                            />
                        </Col>
                    </Row>
                    <div className="w-100 start-0 d-block rounded-3 top-0 position-absolute services__background"></div>
                </Container>
                <Container as="section" fluid className="py-5 align-items-sm-start align-items-center  d-flex flex-column instructions">
                    <h2 className="text-center font-weight-9 mb-3 opacity-9 font-fraunces instructions__title">How it works</h2>
                    <Row className="mt-5 w-100 line-container">
                        <Col sm={4} className="position-relative">
                            <span className="rounded-circle instructions__circle"></span>
                            <span className="position-absolute instructions__line"></span>
                        </Col>
                        <Col sm={4} className="position-relative">
                            <span className="rounded-circle instructions__circle"></span>
                            <span className="position-absolute instructions__line"></span>
                        </Col>
                        <Col sm={4}><span className="rounded-circle instructions__circle"></span></Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={4} lg={4} className="instructions__column">
                            <InstructionCard
                                title="Pick your coffee"
                                description="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
                            />
                        </Col>
                        <Col xs={12} sm={4} lg={4} className="instructions__column">
                            <InstructionCard
                                title="Choose the frequency"
                                description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
                            />
                        </Col>
                        <Col xs={12} sm={4} lg={4} className="instructions__column">
                            <InstructionCard
                                title="Receive and enjoy!"
                                description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                                world-class coffees curated to provide a distinct tasting experience."
                            />
                        </Col>
                    </Row>
                    <Link to="/" className="text-white font-weight-9 rounded-3 mt-3 text-center font-fraunces instructions__link">
                        Create your plan
                    </Link>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Home;