import './styles.css';

const P = ({ text, className}) => {
    return (
        <p className={`text-center opacity-9 paragraph ${className}`}>{ text }</p>
    );
};

export default P;