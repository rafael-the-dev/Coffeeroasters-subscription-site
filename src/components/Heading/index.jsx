import './styles.css';

const H1 = ({ children, className }) => {
    return (
        <h1 className={`font-weight-9 opacity-9 text-center font-fraunces text-white ${className}`}>{ children }</h1>
    )
};

const H2 = ({ children, className }) => {
    return (
        <h2 className={`text-center font-weight-9 font-fraunces text-white ${className}`}>{ children }</h2>
    )
};

const H3 = ({ children, className }) => {
    return (
        <h3 className={`text-center font-weight-9 opacity-9  font-fraunces ${className}`}>{ children }</h3>
    )
};

export {
    H1,
    H2,
    H3
}