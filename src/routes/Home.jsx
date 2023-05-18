import React from "react";
import styled from "styled-components";
import ShortLink from "../components/ShortLink";

const Home = () => {
  return (
    <Main>
      <Container>
        <input placeholder="Links que cabem no seu bolso" />
        <button>
          <span>Encurtar link</span>
        </button>
      </Container>
      <ShortLink />
      <ShortLink />
      <ShortLink />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  margin-bottom: 38px;

  * {
    margin: 0 35px;
  }

  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
  }
`;
export default Home;
