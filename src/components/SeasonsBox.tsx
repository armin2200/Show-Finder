import React, { useState } from 'react';

import { Episode, Season } from '../types';
import EpisodeBox from './EpisodeBox';

import SeasonSelectField from './SeasonSelectField';

interface Props {
  rating?: number;
  seasons?: Season[];
  episodes?: Episode[];
}

const SeasonsBox: React.FC<Props> = ({ seasons, rating, episodes }) => {
  const [selectedSeason, setSelectedSeason] = useState(0);

  const changeSelectedSeason = (num: number) => {
    setSelectedSeason(num);
  };
  const filteredEpisodes = episodes?.filter(
    (ep) => ep.season === selectedSeason
  );

  return (
    <div style={{ height: '100%' }}>
      <SeasonSelectField
        seasons={seasons ?? []}
        onChangeSeason={changeSelectedSeason}
      />
      <div style={{ overflow: 'scroll', height: '550px' }}>
        {filteredEpisodes?.map((ep) => (
          <EpisodeBox
            key={ep.id}
            rating={rating ?? 0}
            name={ep.name}
            releaseDate={ep.airdate}
            number={ep.number}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonsBox;
