import css from "../FriendListItem/FriendListItem.module.css"
import clsx from "clsx"

export function FriendListItem(data) {
  const { avatar, name, isOnline } = data.friend;
console.log(css);
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, {[css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}
