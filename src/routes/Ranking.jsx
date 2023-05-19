import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosPrivate } from "../api/axios";
import trophy from "../assets/trophy.svg";
import RankItem from "../components/RankItem";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRanking = async () => {
    const result = await axiosPrivate.get("/ranking", {});
    setRanking(result.data);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      getRanking();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Main>
      <Vertical>
        <img src={trophy} alt="Ranking" />
        <H1>Ranking</H1>
      </Vertical>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && !ranking && <p>Sem dados para exibir...</p>}
      {!isLoading && ranking && (
        <RankingContainer>
          {ranking.map((user, key) => (
            <RankItem key={key} data={user} pos={key+1}/>
          ))}
          
        </RankingContainer>
      )}
    </Main>
  );
};

export default Ranking;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Vertical = styled.div`
  display: flex;

  * {
    margin: 0 5px;
  }
`;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
`;

const RankingContainer = styled.section`
  margin-top: 57px;
  padding: 12.5px 0;
  width: 1017px;
  min-height: 216px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
`;
