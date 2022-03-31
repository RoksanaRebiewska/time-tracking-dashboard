import styles from './Card.module.css';

const Card = ({ className, style, children }) => {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
