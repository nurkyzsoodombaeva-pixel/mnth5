import React from 'react';

const UserCard = ({ user, isPremium }) => {
  const qwerty = () => {
    console.log(user);
  };

  return (
    <div className="user-card" onClick={qwerty}>
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="user-avatar" />
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>@{user.username}</p>
        <p>{user.email}</p>
        {isPremium && <span className="premium-badge">Премиум</span>}
      </div>
    </div>
  );
};

export default UserCard;
