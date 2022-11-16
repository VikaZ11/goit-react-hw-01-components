import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import data from '../../docs/data';
import styles from './Statistics.module.css'

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        <StatisticsItem data={data} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array,
};
