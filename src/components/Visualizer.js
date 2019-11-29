import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const characterState = state.character;
  return {
    class: characterState.class,
    clothesColor: characterState.clothesColor,
    eyeColor: characterState.eyeColor,
    gender: characterState.gender,
    hairColor: characterState.hairColor,
    skinColor: characterState.skinColor
  }
};

const Visualizer = props => {
  return (
    <div class="visualizer">
      <p>{ JSON.stringify(props) }</p>
      <canvas id="visualizerCanvas"></canvas>
    </div>
  );
};

export default connect(mapStateToProps)(Visualizer);
