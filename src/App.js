import './App.css';
import PinCodeForm from './PinCodeForm';
import { useEffect, useState } from 'react';
import Info from './Info';

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocationInfo = async (postalCode) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      if (response.ok) {
        const data = await response.json();
        setLocation(data);
      } else {
        if (postalCode.length != 6 || isNaN(postalCode))
          setError('You Enter The Wrong Pin code');
        else setError('Location not found');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      console.log(err);
    }

    setIsLoading(false);
  };

  const handleClear = () => {
    setLocation(null);
    setError(null);
  };

  return (
    <div className="center">
      <div className="container">
        <PinCodeForm onSubmit={fetchLocationInfo} />
        <Info
          location={location}
          error={error}
          isLoading={isLoading}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;
