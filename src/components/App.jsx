import { ProfileModule } from "./Profile/Profile.module";
import userData from "./userData.json"

function App (){
  return <div>
    <ProfileModule userData={userData}/>
  </div>
}

export default App;