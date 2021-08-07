import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import granEspressoImage from '../../assets/images/home/image-gran-espresso.png';
import './styles.css';
import CollectionCard from '../../components/CollectionCard';
import ServiceCard from '../../components/ServiceCard';
import Footer from '../../components/Footer';
import Instructions from '../../components/Instructions';
import { useEffect } from 'react';
import Hero from '../../components/Hero';
import P from '../../components/P';
import { H1 } from '../../components/Heading';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ ]);
    
    return (
        <>
            <Header />
            <Container as="main" fluid className="main">
                <Hero className="home-hero">
                    <H1 className="default-hero__title display-1 home-hero__title">Great coffee<br/>made simple</H1>
                    <P
                        text="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                        coffees from our best roasters delivered directly to your door, at your schedule." 
                        className="opacity-75 mt-3 home-hero__description text-white text-center default-hero__description"
                    />
                    <Link to="/plan" className="text-white mt-5 d-block text-center font-fraunces rounded-3 text-decoration-none 
                        home-hero__link">
                        Create your plan
                    </Link>
                </Hero>
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
                <Instructions title="How it works" url="/plan" />
            </Container>
            <Footer />
        </>
    );
};

export default Home;