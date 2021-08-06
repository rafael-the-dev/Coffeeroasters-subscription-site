import './styles.css';

const TabButton = ({ text, step, containerId }) => {
    return (
        <a href={`#${containerId}`} className="font-weight-9 font-fraunces text-start border-0 py-3 ps-4 bg-transparent
            border-7 text-decoration-none tab-button">
            <span className="me-3">{ step }</span>{ text }
        </a>
    );
};

export default TabButton;