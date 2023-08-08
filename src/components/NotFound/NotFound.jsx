import React from 'react';
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
} from './NotFoundStyled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>The page you are looking for does not exist.</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
