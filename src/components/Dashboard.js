import { useState, useEffect } from 'react';

import styles from './Dashboard.module.css';

import DataCard from './DataCard';
import Profile from './Profile';

import WorkIcon from '../assets/icon-work.svg';
import PlayIcon from '../assets/icon-play.svg';
import StudyIcon from '../assets/icon-study.svg';
import ExerciseIcon from '../assets/icon-exercise.svg';
import SocialIcon from '../assets/icon-social.svg';
import SelfCareIcon from '../assets/icon-self-care.svg';

const data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
    color: '#fe8b64',
    icon: `${WorkIcon}`,
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
    color: '#56c2e6',
    icon: `${PlayIcon}`,
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
    color: '#ff5e7d',
    icon: `${StudyIcon}`,
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
    color: '#4bcf83',
    icon: `${ExerciseIcon}`,
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
    color: '#7235d1',
    icon: `${SocialIcon}`,
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
    color: '#f1c75b',
    icon: `${SelfCareIcon}`,
  },
];

const Dashboard = () => {
  const [filter, setFilter] = useState('weekly');

  useEffect(() => {
    const dailyFilter = document.getElementById('daily');
    const weeklyFilter = document.getElementById('weekly');
    const monthlyFilter = document.getElementById('monthly');

    if (filter === 'daily') {
      dailyFilter.style.fontWeight = 'bold';
      weeklyFilter.style.fontWeight = 'normal';
      monthlyFilter.style.fontWeight = 'normal';
    } else if (filter === 'weekly') {
      weeklyFilter.style.fontWeight = 'bold';
      dailyFilter.style.fontWeight = 'normal';
      monthlyFilter.style.fontWeight = 'normal';
    } else if (filter === 'monthly') {
      monthlyFilter.style.fontWeight = 'bold';
      dailyFilter.style.fontWeight = 'normal';
      weeklyFilter.style.fontWeight = 'normal';
    }
  }, [filter]);

  const filterDaily = () => {
    setFilter('daily');
  };

  const filterWeekly = () => {
    setFilter('weekly');
  };

  const filterMonthly = () => {
    setFilter('monthly');
  };

  const chosenFilter = filter;

  const period = () => {
    if (filter === 'daily') {
      return 'Day';
    } else if (filter === 'weekly') {
      return 'Week';
    } else if (filter === 'monthly') {
      return 'Month';
    }
  };

  const dataDisplay = data.map((item) => (
    <DataCard
      category={item.title}
      time={item.timeframes[chosenFilter].current}
      last={item.timeframes[chosenFilter].previous}
      color={item.color}
      icon={item.icon}
      period={period()}
    />
  ));

  return (
    <div className={styles.dashboard}>
      <Profile
        onDailyChange={filterDaily}
        onWeeklyChange={filterWeekly}
        onMonthlyChange={filterMonthly}
      />
      {dataDisplay}
    </div>
  );
};

export default Dashboard;
