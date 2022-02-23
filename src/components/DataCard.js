import styles from './DataCard.module.css';

import Card from './Card';

const DataCard = (props) => {
  return (
    <Card
      className={styles.cardBackground}
      style={{ background: `linear-gradient(${props.color}, #1d204b)` }}
    >
      <img src={props.icon} alt={props.category} />
      <Card className={styles.dataCard}>
        <p className={styles.dataCard__category}>{props.category}</p>
        <p className={styles.dataCard__time}>{props.time}hrs</p>
        <p className={styles.dataCard__last}>
          Last {props.period} - {props.last}hrs
        </p>
      </Card>
    </Card>
  );
};

export default DataCard;
