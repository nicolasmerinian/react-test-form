import React from 'react';
import { connect } from 'react-redux';
import {
  getCharacterClass,
  getCharacterClothesColor,
  getCharacterEyeColor,
  getCharacterGender,
  getCharacterHairColor,
  getCharacterSkinColor
} from '../actions/characterActions';

const mapStateToProps = characterState => ({
  class: characterState.class,
  clothesColor: characterState.clothesColor,
  eyeColor: characterState.eyeColor,
  gender: characterState.gender,
  hairColor: characterState.hairColor,
  skinColor: characterState.skinColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterClass: () => dispatch(getCharacterClass()),
  getCharacterClothesColor: () => dispatch(getCharacterClothesColor()),
  getCharacterEyeColor: () => dispatch(getCharacterEyeColor()),
  getCharacterGender: () => dispatch(getCharacterGender()),
  getCharacterHairColor: () => dispatch(getCharacterHairColor()),
  getCharacterSkinColor: () => dispatch(getCharacterSkinColor())
});

const Visualizer = props => {
  const truc = 32;
  return (
    <div class="visualizer">
      <p>{ truc }</p>
    </div>
  );
};

export default connect(mapStateToProps)(Visualizer);
