import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'

const LinkButton = ({ children , url, className, onClick}) => {
    return (
        <Button
            as={url ? Link : ''}
            size="lg"
            className={`text-white text-center font-fraunces border-0 rounded-3 text-decoration-none link-button ${className}`}
            to={url}
            onClick={onClick}>
            { children ? children : 'Create your plan' }
        </Button>
    );
};

export default LinkButton;

