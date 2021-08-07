import { Col, Container, Row } from 'react-bootstrap';
import InstructionCard from '../../components/InstructionCard';
import './styles.css';
import LinkButton from '../LinkButton';
import { H2 } from '../Heading';

const Instructions = ({ title, url, isSubscriptionPage }) => {
    return (
        <Container as="section" fluid className={`py-5 align-items-sm-start align-items-center position-relative d-flex flex-column instructions
            ${isSubscriptionPage ? 'bg-steps rounded-3' : '' }`}>
            {
                title ? <H2 className="mb-3 instructions__title" >{ title }</H2> : ''
            }
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
                        isSubscriptionPage={isSubscriptionPage}
                        title="Pick your coffee"
                        description="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
                    />
                </Col>
                <Col xs={12} sm={4} lg={4} className="instructions__column">
                    <InstructionCard
                        isSubscriptionPage={isSubscriptionPage}
                        title="Choose the frequency"
                        description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
                    />
                </Col>
                <Col xs={12} sm={4} lg={4} className="instructions__column">
                    <InstructionCard
                        isSubscriptionPage={isSubscriptionPage}
                        title="Receive and enjoy!"
                        description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                        world-class coffees curated to provide a distinct tasting experience."
                    />
                </Col>
            </Row>
            {
                url ? (<LinkButton url={url} className="mt-3 instructions__link" />) : ''
            }
            
        </Container>
    );
};

export default Instructions;