import React from 'react';
import { NotFoundContainer, NotFoundText } from './NotFoundStyled'; // Імпорт стилів

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h2>404 - Page Not Found</h2>
      <NotFoundText>The page you are looking for does not exist.</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
