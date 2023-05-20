import React from "react";
import styled from "styled-components";
import shortly from "../assets/shortly.svg";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Nav />
      <LogoContainer onClick={handleNavigate}>
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
    font-style: normal;
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;

    color: #000000;
  }
`;

export default Header;
