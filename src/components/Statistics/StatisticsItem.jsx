import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomColor } from 'utils/getRandomColor';

export const StatisticsItem = ({ data }) => {
  return data.map(item => (
    <li
      key={item.id}
      className={styles.item}
      style={{ backgroundColor: getRandomColor() }}
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
