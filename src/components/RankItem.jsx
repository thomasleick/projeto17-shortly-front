import React from "react";
import styled from "styled-components";

const RankItem = (props) => {
  const { name, linksCount, visitCount } = props.data;
  const { pos } = props;
  return (
    <Container>
      <span>{pos}. {name.split(" ")[0]} - {linksCount} links - {visitCount}{" "}visualizações</span>
      
    </Container>
  );
};

const Container = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    display: flex;

    span {
        margin: 6.5px 40px;
    }
`;
export default RankItem;
