import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const Number = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 70px;
  height: 70px;
  font-size: 2rem;
  font-weight: bold;
  border: 0;
  border-radius: 7px;
  color: #fff;
  background-color: #344a72;
  cursor: pointer;
`;
const Details = styled.div`
  margin-left: 10px;

  span {
    color: #b9bfc7;
  }
  h1 {
    color: #0c224e;
    font-size: 2.4rem;
    margin-bottom: 4px;
  }
  i {
    font-size: 1.6rem;
  }
  .rating_box {
    padding: 4px 0;
  }
  .rating {
    margin-left: 5px;
    font-size: 1.5rem;
  }
  .date {
    font-size: 1.2rem;
  }
`;
const Sub = styled.span`
  height: 20px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bar = styled.span`
  border-left: 1px solid #b9bfc7;
  height: 100%;
`;

interface Props {
  rating: number;
  releaseDate: string;
  name: string;
  number: number;
}

const EpisodeBox: React.FC<Props> = ({ name, rating, releaseDate, number }) => {
  return (
    <Box>
      <Number>{number < 10 ? `0${number}` : number}</Number>
      <Details>
        <h1>{name}</h1>
        <Sub>
          <span className='rating_box'>
            <i className='far fa-star' />
            <span className='rating'>{rating}</span>
          </span>
          <Bar />
          <span className='date'>
            {moment(releaseDate, 'YYYY-MM-DD').format('MMM DD, YYYY')}
          </span>
        </Sub>
      </Details>
    </Box>
  );
};

export default EpisodeBox;
