import './styles.css';

const P = ({ text, className}) => {
    return (
        <p className={`text-center p ${className}`}>{ text }</p>
    );
};

export default P;