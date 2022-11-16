import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendIsOnline from './FriendOnline';
import './online.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li className={styles.item} key={friend.id}>
      <FriendIsOnline status={friend.isOnline} />
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
