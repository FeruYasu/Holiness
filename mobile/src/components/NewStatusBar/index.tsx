import React from 'react';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';


const NewStatusBar: React.FC = ({ children, ...rest }) => {
  const { theme } = useAuth();

  return (
    <Container {...rest} >
        {children}
    </Container>
  );
};

export default NewStatusBar;
