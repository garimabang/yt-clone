import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
width: ${(props) => props.type !== "sm" && "360px"};
margin-bottom: ${(props) =>props.type === "sm" ? "10px" : "45px"};
cursor: pointer;
display: ${(props) =>props.type === "sm" && "flex"};
gap: 10px;
`;

const Image = styled.img`
width: 100%;
height: ${(props) => props.type === "sm" ? "180px" : "202px"};
background-color: #999;
flex:1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-top: 2px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const ChannelImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) =>props.type === "sm" && "none"}
  `;

const Card = ({type}) => {
    return (
      <Link to="/video/test" style={{ textDecoration: "none" }}>
        <Container type={type}>
            <Image type={type} src='https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA' />
        <Details type={type}>
            <ChannelImage type={type}/>
            <Texts>
              <Title>Test Video</Title>
              <ChannelName>Garima Bang</ChannelName>
              <Info>500,000 views • 1 day ago</Info>
            </Texts>

        </Details>
        </Container>
      </Link>
    )
}

export default Card
