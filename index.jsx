import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const MaintenancePage = () => {
  const [seconds, setSeconds] = useState(10); // Set the initial countdown time.
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setRedirect(true);
    }
  }, [seconds]);

  return (
    <div>
      {redirect ? (
        <Redirect to="/new-page" /> // Redirect to the new page when countdown reaches zero.
      ) : (
        <div>
          <h1>Maintenance Page</h1>
          <p>Redirecting in {seconds} seconds...</p>
        </div>
      )}
    </div>
  );
};

export default MaintenancePage;
