export type Status = 'init' | 'fetching' | 'error' | 'fetched';

export interface ShowDetails {
  id: number;
  name: string;
  summary: string;
  image?: { medium: string };
}
export interface Show {
  score: number;
  show: ShowDetails;
}

export interface SingleShow {
  id: number;
  name: string;
  summary: string;
  image?: { original: string };
  rating: {
    average: number;
  };
  _embedded: {
    crew: Crew[];
    cast: Cast[];
    seasons: Season[];
    episodes: Episode[];
  };
}
export interface Cast {
  person: {
    name: string;
  };
}
export interface Crew {
  person: {
    name: string;
  };
  type: string;
}
export interface Season {
  id: number;
  number: number;
}
export interface Episode {
  id: number;
  season: number;
  number: number;
  airdate: string;
  airstamp: string;
  name: string;
}
