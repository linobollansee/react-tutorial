import React, { useState } from 'react';

function UserGreeting() {
  return <h4>Welcome back!</h4>;
}

function GuestGreeting() {
  return <h4>Please sign up.</h4>;
}

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Greeting;