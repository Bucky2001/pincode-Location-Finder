import React, { useState } from 'react';

const PinCodeForm = ({ onSubmit }) => {
  const [postalCode, setPostalCode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
    setPostalCode('');
  };

  return (
    <div className="pin">
      <form onSubmit={handleSubmit}>
        <input
          className="code"
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PinCodeForm;
