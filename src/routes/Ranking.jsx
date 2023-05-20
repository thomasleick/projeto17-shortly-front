import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { axiosPrivate } from "../api/axios";
import trophy from "../assets/trophy.svg";
import RankItem from "../components/RankItem";
import useAuth from "../hooks/useAuth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { auth } = useAuth();

  const getRanking = async () => {
    try {
      const result = await axiosPrivate.get("/ranking", {});
      setRanking(result.data);
    } catch (error) {
      console.log(error);
      // Handle the error (e.g., show an error message)
    }
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
      {isLoading && (
        <SkeletonContainer>
          {/* Skeleton loading elements */}
          <CustomSkeleton count={6} width="calc(100% - 50px)" />
        </SkeletonContainer>
      )}
      {!isLoading && !ranking?.length && <p>Sem dados para exibir...</p>}
      {!isLoading && ranking.length && (
        <RankingContainer>
          {ranking?.map((user, key) => (
            <RankItem key={key} data={user} pos={key + 1} />
          ))}
        </RankingContainer>
      )}
      {!auth && <P>Crie sua conta para usar nosso serviço!</P>}
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

const SkeletonContainer = styled.section`
  margin-top: 57px;
  padding: 12.5px 0;
  width: 1017px;
  min-height: 216px;
  background: #f2f2f2;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px 24px 0px 0px;
`;

const CustomSkeleton = styled(Skeleton)`
  margin: 10px 25px;
  ${({ width }) => width && css`
    width: calc(${width} - 20px);
  `}
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

const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  margin-top: 82px;
`;