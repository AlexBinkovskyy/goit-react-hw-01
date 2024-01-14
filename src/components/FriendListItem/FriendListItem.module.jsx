export function FriendListItem({avatar, name, isOnLine}) {
  <div className="item">
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
    <p className="status">{isOnLine}</p>
  </div>;
}
