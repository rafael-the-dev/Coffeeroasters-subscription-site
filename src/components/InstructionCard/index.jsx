import { Card } from 'react-bootstrap';
import './styles.css';

const InstructionCard = ({ title, description }) => {
    return (
        <Card as="article" className="w-100 mb-4 bg-transparent border-0 instruction-card">
            <Card.Body className="align-center text-center instruction-card__body">
                <Card.Title as="h3" className="font-weight-9 opacity-9 font-fraunces instruction-card__title">{ title }</Card.Title>
                <Card.Text className="opacity-8 instruction-card__description">{ description }</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InstructionCard;