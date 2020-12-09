import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../custom-hooks/useFetch';

import { Show, Status } from '../types';
import Loading from './Loading';
import ShowCard from './ShowCard';

const URL = 'http://api.tvmaze.com/search/';

const List = styled.div`
  display: grid;
  max-width: 1000px;
  width: 100%;
`;

interface Props {
  searchTerm: string;
  onSetStatus: (status: Status) => void;
}

const ShowList: React.FC<Props> = ({ searchTerm, onSetStatus }) => {
  const { data, error, status } = useFetch<Show[]>(
    `${URL}shows?q=${searchTerm}`
  );

  useEffect(() => {
    onSetStatus(status);
  }, [status, onSetStatus]);

  if (status === 'fetching') return <Loading />;
  if (status === 'error')
    return <div style={{ fontSize: '2rem' }}>{error}</div>;
  if (status === 'fetched' && data?.length === 0)
    return <div style={{ fontSize: '2rem' }}>Not found!</div>;

  return (
    <List>
      {data?.map(({ show: { id, name, image, summary } }) => (
        <ShowCard
          key={id}
          name={name}
          imageUrl={image?.medium ?? ''}
          summary={summary}
        />
      ))}
    </List>
  );
};

export default ShowList;
