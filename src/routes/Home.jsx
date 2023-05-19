import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ShortLink from "../components/ShortLink";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ErrWrapper from "../components/Err";

const Home = () => {
  const [url, setUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [clearErrMsg, setClearErrMsg] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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

    await axiosPrivate.post("/urls/shorten", { url });
    await requestUserData();
    setUrl("");
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
        />
        <button onClick={handleShortenLink}>
          <span>Encurtar link</span>
        </button>
      </Container>
      {isLoading && <p>Carregando...</p>}
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
