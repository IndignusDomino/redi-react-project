import React from 'react';

function Profile() {
  return (
    <div className="profile">
      {/* Display user profile information here (e.g., image, name, bio) */}
      <img src="profile-picture.jpg" alt="Profile" />
      <h2>John Doe</h2>
      <p>@johndoe</p>
      <p>This is my bio.</p>
    </div>
  );
}

export default Profile;