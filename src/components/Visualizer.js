import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearCanvas, drawCharacter } from '../utils/draw';

const mapStateToProps = state => {
  const characterState = state.character;

  return {
    class: characterState.class,
    clothesColor: characterState.clothesColor,
    eyeColor: characterState.eyeColor,
    gender: characterState.gender,
    hairColor: characterState.hairColor,
    name: characterState.name,
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
      clearCanvas(ctx, canvasRef.width, canvasRef.height);
      draw(ctx, props);
    } else {
      console.warn('Cannot draw: undefined ctx');
    }
  });

  function formatSubName(subname) {
    return subname
        .substr(0, 1).toUpperCase()
        .concat(subname.substr(1));
  }

  function formatFullName(fullname, separator) {
    return fullname
        .split(separator).map(formatSubName)
        .join(separator);
  }

  function formatName(name) {
    return formatFullName(formatFullName(formatFullName(name.toLowerCase(), "'"), '-'), ' ');
  }

  return (
    <div className="visualizer">
      <canvas id="visualizerCanvas" ref={(canvas) => { canvasRef = canvas; }}
          width="200" height="200"></canvas>
      <p class="nameLabel">{ formatName(props.name) }</p>
    </div>
  );
};

export default connect(mapStateToProps)(Visualizer);
