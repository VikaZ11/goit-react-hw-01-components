import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
