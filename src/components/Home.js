import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { initStorage, isStorageInitialized } from '../utils/storage';

const Home = props => {
  let history = useHistory();

  useEffect(_ => {
    if (!isStorageInitialized()) initStorage();
  });

  function onStartClick() {
    history.push('/page1');
  }

  return (
  	<div className="home">
      <header className="centerFlexContainer">
        <button className="customButton" onClick={ onStartClick }>Create a new character</button>
      </header>
  	</div>
  );
};

export default Home;
