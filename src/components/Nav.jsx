import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <NavContainer>Entrar | Cadastre-se</NavContainer>;
};

const NavContainer = styled.nav`
  width: calc(100% - 50px);
  display: flex;
  justify-content: flex-end;
`;

export default Nav;
