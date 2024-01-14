import "./FriendListItem.css"
import clsx from "clsx"

export function FriendListItem(data) {
  const { avatar, name, isOnline } = data.friend;

  return (
    <div className="item">
      <img className="avatar" src={avatar} alt={name} width="160" />
      <p className="name">{name}</p>
      <p className={clsx('status', {"online": isOnline, "offline": !isOnline })}>
        {isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}
