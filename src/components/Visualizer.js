import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { drawCharacter } from '../utils/draw';

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

function draw(ctx, characterState) {
  drawCharacter(ctx,
    characterState.gender,
    characterState.skinColor,
    characterState.hairColor,
    characterState.eyeColor,
    characterState.class,
    characterState.clothesColor);
}

const Visualizer = props => {
  let canvasRef = null;

  useEffect(() => {
    const ctx = canvasRef.getContext('2d');
    if (ctx) {
      draw(ctx, props);
    } else {
      console.warn('Cannot draw: undefined ctx');
    }
  });

  return (
    <div class="visualizer">
      <p>{ JSON.stringify(props) }</p>
      <canvas id="visualizerCanvas" ref={(canvas) => { canvasRef = canvas; }}
          width="200" height="200"></canvas>
    </div>
  );
};

export default connect(mapStateToProps)(Visualizer);
