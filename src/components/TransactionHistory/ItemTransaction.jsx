import PropTypes from 'prop-types';
import styles from './Transaction.module.css';


export const ItemTransaction = ({ items }) => {
    return items.map(item => (
      <tr key={item.id} className={styles.tr}>
        <td className={styles.td}>{item.type}</td>
        <td className={styles.td}>{item.amount}</td>
        <td className={styles.td}>{item.currency}</td>
      </tr>
    ));
}

ItemTransaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};