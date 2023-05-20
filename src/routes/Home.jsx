import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ShortLink from "../components/ShortLink";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ErrWrapper from "../components/Err";
import { ThreeDots } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const urlRef = useRef();
  const errRef = useRef();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    requestUserData();
    urlRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [url]);

  const requestUserData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosPrivate.get("/users/me");
      setUserInfo(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const validateUri = (uri) => {
    const regex =
      /^([a-z0-9\.\-]*:\/?\/?)?(([a-z0-9\-]+\.)+[a-z]{2,}|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(\/[^\s]*)?$/i;
    return regex.test(uri);
  };

  const handleShortenLink = async (event) => {
    event.preventDefault();

    if (!validateUri(url)) {
      return setErrMsg("Link inválido");
    }
    setIsLoading(true);
    try {
      await axiosPrivate.post("/urls/shorten", { url });
      await requestUserData();
      setUrl("");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Main>
      <ErrWrapper
        status={errMsg ? "errmsg" : "offscreen"}
        posTop="255px"
        width="1021px"
        posLeft="calc(50% - 510.5px)"
      >
        <span ref={errRef}>{errMsg}</span>
      </ErrWrapper>
      <Container>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Links que cabem no seu bolso"
          ref={urlRef}
          disabled={isLoading}
        />
        <button onClick={handleShortenLink} disabled={isLoading}>
          {isLoading ? (
            <Span>
              <ThreeDots
                height="60"
                width="80"
                radius="15"
                color="#5d9040ff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </Span>
          ) : (
            <span>Encurtar link</span>
          )}
        </button>
      </Container>
      {isLoading && (
        <SkeletonContainer>
          <CustomSkeleton count={4} height="60px" />
        </SkeletonContainer>
      )}
      {!isLoading && !userInfo?.shortenedUrls && <p>Sem Links Cadastrados</p>}
      {!isLoading &&
        userInfo?.shortenedUrls &&
        userInfo?.shortenedUrls?.map((shortenedUrl, id) => (
          <ShortLink key={id} data={shortenedUrl} reload={requestUserData} />
        ))}
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
  display: flex;

  & > * {
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

const SkeletonContainer = styled.div`
  margin-top: 20px;
  width: 1021px;
`;

const CustomSkeleton = styled(Skeleton)`
  margin-bottom: 42px;
  border-radius: 12px;
  background: linear-gradient(to right, #80cc7444 85.651%, #f5f5f5ff 14.349%);
`;

const Span = styled.span`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;