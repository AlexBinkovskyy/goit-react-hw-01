import {FriendListItem} from '../FriendListItem/FriendListItem';

export function FriendList(data) {
  return (
    <ul className="friend-list">
      {data.friends.map(friend => 
        {return <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>}
      )}
    </ul>
  );
}