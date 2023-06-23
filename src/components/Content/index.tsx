import React, { ReactNode } from 'react';
import { Container} from './styles';
const Content: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
      <Container>
        {children}
      </Container>
    );
  };

export default Content;

