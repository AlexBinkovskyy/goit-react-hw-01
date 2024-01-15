import { ProfileModule } from './Profile/Profile';
import userData from '../refs/userData.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../refs/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../refs/transactions.json'

export function App() {
  return (
    <div className='rootMain'>
      <ProfileModule userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
}

