import { ProfileModule } from './Profile/Profile.module';
import userData from '../refs/userData.json';
import { FriendList } from './FriendList/FriendList.module';
import friends from '../refs/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.module';
import transactions from '../refs/transactions.json'

function App() {
  return (
    <div>
      <ProfileModule userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
