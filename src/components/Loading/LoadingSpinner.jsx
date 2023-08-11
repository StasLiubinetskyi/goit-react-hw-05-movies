import React from 'react';
import { LoadingSpinnerContainer, Spinner } from './LoadingSpinnerStyled';

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <Spinner />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
