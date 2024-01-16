import FriendList from './friendList/FriendList';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transactionHistory/TransactionHistory';
import {
  userData,
  statisticsData,
  friendsData,
  transactionsData,
} from 'resources/data';

const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics stats={statisticsData} />
      <Statistics title="Upload stats" stats={statisticsData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
};

export default App;
