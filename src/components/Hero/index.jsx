import './styles.css';
import { Container } from 'react-bootstrap';

const Hero = ({ children, className }) => {
    return (
        <Container fluid id="plan-hero" as="section" className={`default-hero bg-cover rounded-3 bg-center bg-no-repeat d-flex
            align-items-center justify-content-center justify-content-sm-start ${className}`}>
            <div className="d-block default-hero__content">
                { children }
            </div>
        </Container>
    );
};

export default Hero;