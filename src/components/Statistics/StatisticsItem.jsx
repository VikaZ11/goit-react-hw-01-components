import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { setBg } from 'components/setBg';

export const StatisticsItem = ({ data }) => {
  return data.map(item => (
    <li
      key={item.id}
      className={styles.item}
      style={{ backgroundColor: '#' + setBg() + '20' }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));
};

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
