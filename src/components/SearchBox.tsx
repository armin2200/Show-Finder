import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button from './Button';

const Container = styled.div`
  display: flex;
  width: 700px;
  height: 70px;
  margin: 20px 0;
  Button {
    margin-left: 20px;
    padding: 20px 10px;
    width: 170px;
    font-size: 2rem;
    border: 0;
    border-radius: 7px;
    color: #fff;
    background-color: #344a72;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #172d5a;
    }
    &:disabled {
      background-color: #535f75;
    }
  }
`;

const Wrapper = styled.div`
  background-color: #f0f2f5;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 7px;
  overflow: hidden;
  input {
    font-size: 2rem;
    display: block;
    width: 100%;
    height: 5.4rem;
    border: none;
    background-color: #f0f2f5;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #959dac;
      opacity: 1; /* Firefox */
    }
  }
  i {
    font-size: 25px;
    padding-left: 20px;
    padding-right: 12px;
    color: #283f69;
  }
`;

interface Props {
  OnSetSearchTerm: (input: string) => void;
  disabled: boolean;
}

const SearchBox: React.FC<Props> = ({ OnSetSearchTerm, disabled }) => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const searchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    setSearchInput(userInput);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (e.key === 'Enter') {
      OnSetSearchTerm(searchInput);
      history.push(`/search/shows?title=${searchInput}`);
    }
  };

  const searchClickHandler = () => {
    OnSetSearchTerm(searchInput);
    history.push(`/search/shows?title=${searchInput}`);
  };

  return (
    <Container>
      <Wrapper>
        <i className='fas fa-search' />
        <input
          value={searchInput}
          type='text'
          onChange={searchTermHandler}
          onKeyDown={keyDownHandler}
          placeholder='search show titles'
          disabled={disabled}
        />
      </Wrapper>
      <Button
        name={disabled ? 'Searching' : 'Search'}
        onClick={searchClickHandler}
        disabled={disabled}
      />
    </Container>
  );
};

export default SearchBox;
