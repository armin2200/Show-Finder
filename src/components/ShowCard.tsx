import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import notFound from '../images/notFoundPoster.jpg';
import { useQuery } from '../custom-hooks/useQuery';

const Wrapper = styled.div`
  padding: 0 10px;
  height: 250px;
  display: grid;
  grid-template-columns: 200px 1fr;
  /* align-items: center; */
  /* background-color: #f0f2f5; */
  margin: 50px 0;

  h1 {
    color: #172d5a;
    font-size: 2.8rem;
  }

  Button {
    text-transform: capitalize;
    padding: 12px 15px;
    font-size: 1.2rem;
    border: 0;
    border-radius: 7px;
    color: #fff;
    background-color: #344a72;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #172d5a;
    }
  }
`;

const Summary = styled.div`
  margin: 15px 0 25px;
  font-size: 1.6rem;
  color: #959dac;
  min-height: 80px;
  line-height: 2.2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  width: 100%;
`;

const Details = styled.div`
  max-width: 500px;
  padding: 25px 0 25px 45px;
  height: 250px;
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 15px;
  border-radius: 7px;
  background-color: #f0f2f5;
`;
const ImageContainer = styled.div`
  position: relative;
  border-radius: 7px;
  height: 100%;
  padding: 0 15px;
  background-color: #f0f2f5;
`;
const Image = styled.div<{ url: string }>`
  position: absolute;
  left: 20px;
  top: -21px;
  width: 100%;
  height: 295px;
  border-radius: 7px;
  border: 1px solid #172d5a;

  background-image: url(${({ url }) => url});
`;

const ShowCard: React.FC<{
  name: string;
  imageUrl: string;
  summary: string;
}> = ({ name, imageUrl, summary }) => {
  const history = useHistory();
  const query = useQuery();

  let url = imageUrl ? imageUrl : notFound;

  const searchEpisodesHandler = () => {
    history.push(`/show?title=${name}&embed=episodes`);
  };
  return (
    <Wrapper>
      <ImageContainer>
        <Image url={url}></Image>
      </ImageContainer>
      <DetailsContainer>
        <Details>
          <h1>{name}</h1>
          <Summary>
            {' '}
            {summary ? parse(summary) : `No ${name} summary record exists!`}
          </Summary>
          <Button name='show Episodes' onClick={searchEpisodesHandler} />
        </Details>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ShowCard;
