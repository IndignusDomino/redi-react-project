import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;