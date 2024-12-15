import React from 'react';

function Profile({ user }) {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Joined: {new Date(user.joinedDate).toLocaleDateString()}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
}

export default Profile;