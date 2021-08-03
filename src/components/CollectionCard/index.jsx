import { Card } from 'react-bootstrap';
import './styles.css';

const CollectionCard = ({ image, title, description }) => {
    return (
        <Card as="article" className="w-100 py-4 align-center bg-transparent border-0 collection-card">
            <Card.Img className="collection-card__image" src={image} alt={title} />
            <Card.Body className="d-flex align-center flex-column collection-card__body">
                <Card.Title as="h2" className="font-weight-bold collection-card__title">{ title }</Card.Title>
                <Card.Text className="mt-2 text-center collection-card__description">
                    { description }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CollectionCard;