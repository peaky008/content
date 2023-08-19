// import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import Login from './login';
import Profile from './profile';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);

  const handleLogin = id => {
    setUserId(id);
  };

  return (
    <div className="App">
      {!userId ? <Login onLogin={handleLogin} /> : <Profile userId={userId} />}
  
    </div>
  );
}

export default App;

