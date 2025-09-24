import React from 'react';
import ProfileView from './ProfileView';
import ProfileForm from './ProfileForm';

function Demo() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Manager</h1>
      <ProfileForm />
      <hr />
      <ProfileView />
    </div>
  );
}

export default Demo;
