import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import granEspressoImage from '../../assets/images/home/image-gran-espresso.png';
import './styles.css';
import CollectionCard from '../../components/CollectionCard';
import ServiceCard from '../../components/ServiceCard';

const Home = () => {
    return (
        <>
            <Header />
            <Container as="main" fluid className="main">
                <Container as="section" fluid>
                    <Row className="rounded-3 home-hero">
                        <Col xs={12} sm={6} lg={5} xl={4} className="flex flex-column justify-center text-white align-center
                            align-items-sm-start text-center home-hero__content" >
                            <h1 className="display-1 home-hero__title">
                                Great coffee<br/>made simple
                            </h1>
                            <p className="opacity-75 mt-3 home-hero__description">
                                Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                                coffees from our best roasters delivered directly to your door, at your schedule.
                            </p>
                            <Link to="/" className="text-white mt-5 rounded-3 text-decoration-none  home-hero__link">
                                Create your plan
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container as="section" fluid className="py-5 collections">
                    <h2 className="text-center collection__title">our collection</h2>
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
            </Container>
        </>
    );
};

export default Home;