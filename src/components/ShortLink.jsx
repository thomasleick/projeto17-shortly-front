import React from "react";
import styled from "styled-components";
import deleteIcon from "../assets/delete.svg";
import { axiosPrivate } from "../api/axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const ShortLink = (props) => {
  const { id, shortUrl, url, visitCount } = props.data;
  const { reload } = props;
  const axiosPrivateDelete = useAxiosPrivate();

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosPrivate.get(`/urls/open/${shortUrl}`);
      if (response.status === 200) {
        window.location.href = url;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axiosPrivateDelete.delete(`/urls/${id}`);
      await reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ShortLinkContainer>
      <Left onClick={handleClick}>
        <P1>{url}</P1>
        <P2>{shortUrl}</P2>
        <P3>Quantidade de visitantes: {visitCount}</P3>
      </Left>
      <Right>
        <img src={deleteIcon} alt="Excluir" onClick={handleDelete} />
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
  position: relative;
  display: flex;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    position: absolute;
    max-width: 260px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

const P1 = styled.p`
  left: 0;
`;

const P2 = styled.p`
  left: 50%;
`;

const P3 = styled.p`
  right: 0;
`;

export default ShortLink;
