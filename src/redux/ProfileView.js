import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, deleteProfile } from './ProfileSlice';

const ProfileView = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!data) return <p>No profile found.</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      {data.profileImg && (
        <img
          src={`http://localhost:5000${data.profileImg}`}
          alt="Profile"
          width={150}
        />
      )}
      <p>Roles: {data.roles?.join(', ')}</p>
      <p>
        <strong>Links:</strong> {data.socialLinks?.linkedin} | {data.socialLinks?.twitter}
      </p>
      <button onClick={() => dispatch(deleteProfile(data._id))}>
        Delete Profile
      </button>
    </div>
  );
};

export default ProfileView;
