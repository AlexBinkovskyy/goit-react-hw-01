export function FriendListItem(data) {
  const { avatar, name, isOnline } = data.friend;
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <p className="status">{isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}