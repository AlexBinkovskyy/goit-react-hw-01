export function ProfileModule({
  userData: { username, tag, location, avatar, stats: {followers, views, likes} },
}) {
  return <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt={username}
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}@pmarica</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="value">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="value">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="value">{likes}</span>
      </li>
    </ul>
  </div>;
}