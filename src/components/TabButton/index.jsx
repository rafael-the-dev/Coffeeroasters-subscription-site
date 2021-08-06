import { Link } from 'react-router-dom';
import './styles.css';

const TabButton = ({ text, step, containerId }) => {
    return (
        <Link to={`#${containerId}`} className="font-weight-9 font-fraunces text-start border-0 py-3 ps-4 bg-transparent
            border-7 text-decoration-none tab-button">
            <span className="me-3">{ step }</span>{ text }
        </Link>
    );
};

export default TabButton;