import { Card } from 'react-bootstrap';
import './styles.css';

const AddressCard = ({ title, children }) => {
    return (
        <Card as="article" className="w-100 bg-transparent border-0 mb-2 py-4 address-card">
            <Card.Body className="address-card__body">
                <Card.Title as="h3" className="font-weight-9 opacity-9 text-center font-fraunces address-card__title">{ title }</Card.Title>
                <Card.Text as="address" className="mt-3 text-center opacity-8 address-card__description">{ children }</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default AddressCard;