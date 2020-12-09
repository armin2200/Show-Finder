import React, { useState } from 'react';
import styled from 'styled-components';
import { Episode, Season } from '../types';

const Select = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 50px;
  background: #f0f2f5;
  overflow: hidden;
  border-radius: 7px;
  i {
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: -10px;
    padding: 0 1em;
    background: #f0f2f5;
    color: #2c3e50;
    cursor: pointer;
    pointer-events: none;
    transition: 0.25s all ease;
  }
  select {
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #f0f2f5;
    background-image: none;
    flex: 1;
    padding: 0 20px;
    color: #0c224e;
    font-weight: bold;
    cursor: pointer;
  }
`;

interface Props {
  seasons: Season[];
  onChangeSeason: (num: number) => void;
}

const SeasonSelectField: React.FC<Props> = ({ seasons, onChangeSeason }) => {
  const [value, setValue] = useState('0');
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
    onChangeSeason(+e.currentTarget.value);
  };
  return (
    <Select>
      <select value={value} onChange={changeHandler}>
        <option disabled value={0}>
          Choose an Season
        </option>
        {seasons.map((s) => (
          <option value={s.number} key={s.id}>
            Season {s.number}
          </option>
        ))}
      </select>
      <i className='fas fa-caret-down' />
    </Select>
  );
};

export default SeasonSelectField;
