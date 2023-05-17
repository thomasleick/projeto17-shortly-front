import React from "react";
import styled from "styled-components";
import shortly from "../assets/shortly.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <LogoContainer>
        <h1>Shortly</h1>
        <Img src={shortly} alt="Shortly" />
      </LogoContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Img = styled.img``;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;

    color: #000000;
  }
`;

export default Header;
