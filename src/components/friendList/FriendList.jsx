import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
