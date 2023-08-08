import React from 'react';

const LoadingSpinner = () => {
  return (
    <div
      className="loading-spinner"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        className="spinner"
        style={{
          border: '4px solid rgba(0, 0, 0, 0.1)',
          borderLeftColor: '#000',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <style>
        {`
          @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
