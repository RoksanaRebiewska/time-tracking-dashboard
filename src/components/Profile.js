import Card from './Card';
import styles from './Profile.module.css';

import Tanya from '../assets/image-tanya.jpg';

const Profile = (props) => {
  return (
    <Card className={styles.profileContainer}>
      <Card className={styles.profile}>
        <img src={Tanya} alt="Tanya" />
        <div>
          <p className={styles.report}>Report for</p>
          <p className={styles.name}>Tanya Sinclair</p>
        </div>
      </Card>
      <div className={styles.period}>
        <button id="daily" onClick={props.onDailyChange}>
          Daily
        </button>
        <button id="weekly" onClick={props.onWeeklyChange}>
          Weekly
        </button>
        <button id="monthly" onClick={props.onMonthlyChange}>
          {' '}
          Monthly
        </button>
      </div>
    </Card>
  );
};

export default Profile;
