import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = props => {
  let history = useHistory();

  function onStartClick() {
    history.push('/page1');
  }

  return (
  	<div class="home">
      <header>
        <button class="customButton" onClick={ onStartClick }>Start</button>
      </header>
  	</div>
  );
};

export default Home;
