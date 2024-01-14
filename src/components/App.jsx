import { ProfileModule } from "./Profile/Profile.module";
import userData from "../refs/userData.json"
import { FriendList } from "./FriendList/FriendList.module";
import friends from "../refs/friends.json"


function App (){
  return <div>
    <ProfileModule userData={userData}/>
    <FriendList friends={friends}/>
  </div>
}

export default App;