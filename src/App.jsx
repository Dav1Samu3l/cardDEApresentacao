import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-square">
        <img className="profile-image" src="https://avatars.githubusercontent.com/u/106498376?s=400&u=8bdd0fb75e8ffc8f9fcedbc6befde2f966954dde&v=4" alt="Profile Picture" />
      </div>
      <div>
        <h1 className="profile-name">Davi Samuel</h1>
      </div>
      <div className="profile-icons">
        <a href="https://facebook.com">
          <FaFacebook className="profile-icon" />
        </a>
        <a href="https://twitter.com" target='_blank'>
          <FaTwitter className="profile-icon" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
