import React from "react";
import styled from "styled-components";
import deleteIcon from "../assets/delete.svg";

const ShortLink = () => {
  return (
    <ShortLinkContainer>
      <Left>
        <p>Teste 1</p>
        <p>Teste 2</p>
        <p>Teste 3</p>
      </Left>
      <Right>
        <img src={deleteIcon} alt="Excluir" />
      </Right>
    </ShortLinkContainer>
  );
};

const ShortLinkContainer = styled.section`
  position: relative;
  display: flex;

  width: 1021px;
  height: 60px;
  margin: 21px 0;
  background-color: #80cc74;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
`;
const Left = styled.div`
  width: calc(1021px - 245px);
  height: 100%;
  margin-left: 21px;
  margin-right: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
  }
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  width: 130px;
  height: 60px;
  background-color: #fff;
  border-radius: 0 12px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ShortLink;
