import transaction from '../../docs/transactions';
import { ItemTransaction } from './ItemTransaction';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

export const TransactionHistory = () => {
    return (
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.header}>
            <th className={styles.headerName}>Type</th>
            <th className={styles.headerName}>Amount</th>
            <th className={styles.headerName}>Currency</th>
          </tr>
        </thead>

        <tbody>
          <ItemTransaction items={transaction} />
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
  transaction: PropTypes.array,
};