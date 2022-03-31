import styles from './DataCard.module.css';

import Card from './Card';

const DataCard = ({ color, icon, category, time, period, last }) => {
  return (
    <Card
      className={styles.cardBackground}
      style={{ background: `linear-gradient(${color}, #1d204b)` }}
    >
      <img src={icon} alt={category} />
      <Card className={styles.dataCard}>
        <p className={styles.dataCard__category}>{category}</p>
        <p className={styles.dataCard__time}>{time}hrs</p>
        <p className={styles.dataCard__last}>
          Last {period} - {last}hrs
        </p>
      </Card>
    </Card>
  );
};

export default DataCard;
