import { Card } from 'react-bootstrap';
import './styles.css';

const PlanCard = ({ title, description, setValue, value }) => {
    const key = title.toLowerCase();
    const clickHandler = () => {
        setValue(v => key);
    };

    return (
        <Card as="article" key={key} onClick={clickHandler} className={`w-100 border-0 rounded-3 py-3 mb-3 
            plan-card ${ value === key ? 'secondary-bg' : 'primary-bg' }`}>
            <Card.Body className="plan-card__body">
                <Card.Title as="h3" className={`plan-card__title text-start font-weight-9 opacity-9  font-fraunces ${ value === key ? 'text-white' : '' }`}>{ title }</Card.Title>
                <Card.Text className={`plan-card__description text-start ${ value === key ? 'text-white' : '' }`}>
                    { description }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PlanCard;