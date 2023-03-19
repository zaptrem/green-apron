import React, { useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

function FakeLoader({ children }) {
  // Define a state variable to track if the loading is done
  const [loadingDone, setLoadingDone] = useState(false);

  // Use useEffect hook to set a timeout for five seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Use conditional rendering to show either PulseLoader or children
  return (
    <div>
      {loadingDone ? (
        children
      ) : (
        <PulseLoader color="#000000" size={20} />
      )}
    </div>
  );
}

export default FakeLoader;