import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { ThreeCircles } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <>
      <Header />
      <OutletContainer>
        <ThreeCircles
          height="250"
          width="250"
          color="#80cc74"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </OutletContainer>
    </>
  );
};

const OutletContainer = styled.div`
  height: calc(100dvh - 300px);
  display: flex;
  justify-content: center;
`;

export default LoadingPage;
