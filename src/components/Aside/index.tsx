// Aside.tsx
import React from 'react';

import logImg from '../../assets/logo.png';
import { FaWpforms } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';

import { Container, Header, LogImg, MenuContainer,  Title , Link_,MenuItemButton} from './styles';


import { useAuth } from '../../hooks/auth';
const Aside: React.FC = () => {

  const {signOut}= useAuth();
  return (
    <Container>
      <Header>
        <LogImg src={logImg} alt="Logo Forms TEA" />
        <Title>Testes TEA</Title>
      </Header>

      <MenuContainer>
        <Link_ to="/RAADS-R">
          <FaWpforms />
          (RAADS-R)
        </Link_>
        <Link_ to="/Forms_tea_2">
          <FaWpforms />
          Formulário 2
        </Link_>

        <Link_ to="/Forms_tea_3">
          <FaWpforms />
          Formulário 3
        </Link_>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;