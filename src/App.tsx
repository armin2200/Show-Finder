import React, { useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import EpisodesList from './components/EpisodesList';
import SearchBox from './components/SearchBox';
import ShowList from './components/ShowList';
import { Status } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, SetStatus] = useState<Status>('init');

  const searchTermHandler = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, []);

  const statusHandler = useCallback((status: Status) => {
    SetStatus(status);
  }, []);

  return (
    <Router>
      <div className='App'>
        <div className='Header'>Show Finder</div>
        <div className='Wrapper'>
          <SearchBox
            OnSetSearchTerm={searchTermHandler}
            disabled={status === 'fetching'}
          />

          <Switch>
            <Route path='/search/shows'>
              <ShowList searchTerm={searchTerm} onSetStatus={statusHandler} />
            </Route>
            <Route path='/show'>
              <EpisodesList />
            </Route>
            <Redirect from='/' to='/search' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
