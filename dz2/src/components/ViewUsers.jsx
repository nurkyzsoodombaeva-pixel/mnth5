import React from 'react';
import UserCard from './UserCard';
import './ViewUsers.css';

const ViewUsers = () => {
  const users = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    username: `user_${i + 1}`,
    email: `user${i + 1}@example.com`,
    website: `user${i + 1}.com`,
    avatar: `https://picsum.photos/200/200?random=${i + 1},`
  }));

  return (
    <div className="view-users">
      <h1>User List</h1>
      <div className="user-cards-container">
        {users.map((user, index) => (
          <UserCard
            key={user.id}
            user={user}
            isPremium={index < 10}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;
