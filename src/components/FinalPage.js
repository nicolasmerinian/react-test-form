import React from 'react';
import { connect } from 'react-redux';
import { saveCharacter } from '../utils/storage';

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

const FinalPage = props => {

  function onSave() {
    console.log('onSave');
    saveCharacter(props);
  }

  return (
    <div className="finalContent">
      <div>
        <h2>Congratulations!</h2>
        <p>You completed your character!</p>
        <button className="customButton" type="submit"
            onClick={ onSave }>Save</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(FinalPage);
