import { Card } from 'react-bootstrap';
import './styles.css';

const CollectionCard = ({ image, title, description }) => {
    return (
        <Card as="article" className="w-100 py-4 align-items-center bg-transparent border-0 flex-sm-row flex-md-column
            align-items-sm-stretch align-items-md-center collection-card">
            <Card.Img className="collection-card__image" src={image} alt={title} />
            <Card.Body className="d-flex align-center flex-column align-items-sm-start align-items-md-center collection-card__body">
                <Card.Title as="h3" className="font-weight-bold font-weight-9 text-center font-fraunces collection-card__title">{ title }</Card.Title>
                <Card.Text className="mt-2 text-center collection-card__description">
                    { description }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CollectionCard;