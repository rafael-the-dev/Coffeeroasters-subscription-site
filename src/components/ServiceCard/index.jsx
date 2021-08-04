import { Card } from 'react-bootstrap';
import './styles.css';

const ServiceCard = ({ title, description }) => {
    return (
        <Card as="article" className="w-100 border-0 rounded-3 mb-3 py-4 service-card align-items-sm-end align-items-md-center">
            <Card.Body className="d-flex align-items-center flex-column text-white service-card__body align-items-sm-start 
                align-items-md-center">
                <Card.Title as="h3" className="font-weight-9 text-center font-fraunces service-card__title">{ title }</Card.Title>
                <Card.Text className="text-center opacity-8 service-card__description">
                    { description }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;