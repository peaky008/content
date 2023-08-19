 
import React, { useState, useEffect } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        localStorage.setItem('profileUser', JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, [userId]);

  return (
    <div className='profile'  
    >
      <h2>Profile</h2>
      {user && (
        <div className='detail'>
           <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>First-Name: {user.firstName}</p>
          <p>middle-name:{user.maidenName}</p>
          <p>Last-Name: {user.lastName}</p>
          <p>Gender: {user.gender}</p>
          <p>date-of-birth:{user.birthDate}</p>
          <p>Age:{user.age}</p>
          <p>image:</p>
          <img src={user.image} className='image'  alt="" />
           <p>Phone-No:{user.phone}</p>
          <p>Address: {user.address.address}</p>
          <p>Postal-code:{user.address.postalCode}</p>
          <p>Postal-code:{user.address.city}</p>
          <p>Email: {user.email}</p>
          <p>Domain:{user.domain}</p>
          <p>IP Address:{user.ip}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
// user-hbingley1,pass-CQutx25i8r
