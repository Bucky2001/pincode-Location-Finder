import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Info = ({ location, error, isLoading, onClear }) => {
  if (isLoading) {
    return (
      <div className="center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        <div className="card">
          <p className="heading">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!location) {
    return null;
  }

  return (
    <div className="center">
      <div className="card">
        <p className="heading">
          You Search For The Pin Code {location['post code']} And The Location
          Information Is
        </p>
        <p className="description">
          <span className="bold-text">Country</span>: {location.country}
        </p>
        <p className="description">
          <span className="bold-text">State</span>: {location.places[0].state}
        </p>
        <p className="description">
          <span className="bold-text">Places Name</span> :
          {location.places.map((data, index) => (
            <span key={index}>
              {data['place name']}
              {index < location.places.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <button className="btn" onClick={onClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Info;
