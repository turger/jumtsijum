import './styles.css';

const Button = ({ onClick, title, variant }) => {
  return (
    <button className={variant || 'button'} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
