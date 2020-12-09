import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import useFetch from '../custom-hooks/useFetch';
import { useQuery } from '../custom-hooks/useQuery';
import { SingleShow } from '../types';
import notFound from '../images/notFoundPoster.jpg';
import SeasonsBox from './SeasonsBox';
import Loading from './Loading';

const URL = 'http://api.tvmaze.com/shows';

const Box = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 30px;
  justify-self: start;
  padding-left: 25px;
  height: 70vh;
  overflow: hidden;
`;
const LeftSide = styled.div``;
const RightSide = styled.div`
  height: 100%;

  width: 500px;
`;
const Poster = styled.div<{ url: string }>`
  width: 100%;
  height: 400px;
  border-radius: 7px;
  border: 1px solid #172d5a;
  background-size: cover;
  background-image: url(${({ url }) => url});
`;
const Details = styled.div`
  overflow: scroll;
  height: 200px;
  h1 {
    margin-top: 5px;
    color: #0c224e;
    font-size: 2.8rem;
  }
  .Creator,
  .Starring {
    margin-top: 3px;
    font-size: 1.5rem;
    color: #8c93a0;
    span {
      color: #737c8b;
      font-weight: bold;
    }
  }
`;
const Summary = styled.div`
  margin-top: 7px;
  font-size: 1.4rem;
  color: #8c93a0;
`;

const EpisodesList = () => {
  const query = useQuery();
  console.log(`${URL}/${query.get(
    'id'
  )}&embed[]=crew&embed[]=cast&embed[]=seasons&embed[]=episodes
  `);
  const { data, error, status } = useFetch<SingleShow>(
    `${URL}/${query.get(
      'id'
    )}?&embed[]=crew&embed[]=cast&embed[]=seasons&embed[]=episodes
    `
  );

  if (status === 'fetching') return <Loading />;
  else if (status === 'error') return <div>{error}</div>;

  const seasons = data?._embedded.seasons;
  const episodes = data?._embedded.episodes;
  const creators = data?._embedded.crew
    .filter((c) => c.type === 'Creator')
    .map((p) => p.person.name)
    ?.join(', ');
  const stars = data?._embedded.cast.map((c) => c.person.name)?.join(', ');

  return (
    <Box>
      <LeftSide>
        <Poster url={data?.image?.original ?? notFound}></Poster>
        <Details>
          <h1>{data?.name}</h1>
          <Summary>
            {data?.summary
              ? parse(data.summary)
              : `No ${data?.name} summary record exists!`}
          </Summary>
          <div>
            <p className='Creator'>
              <span>Creator: </span>
              {creators}
            </p>
            <p className='Starring'>
              <span>Starring: </span>
              {stars}
            </p>
          </div>
        </Details>
      </LeftSide>
      <RightSide>
        <SeasonsBox
          rating={data?.rating.average}
          seasons={seasons}
          episodes={episodes}
        />
      </RightSide>
    </Box>
  );
};

export default EpisodesList;
