import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveCharacter } from '../utils/storage';
import { saveCharacters } from '../actions/characterActions';
import { getCharacters } from '../utils/storage';

const mapStateToProps = state => {
  const characterState = state.inProgress;

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

const mapDispatchToProps = {
  saveCharacters
}

const FinalPage = props => {
let history = useHistory();

  function onSave() {
    saveCharacter(props).then(_ => {
      const charactersFromStorage = getCharacters();
      props.saveCharacters(charactersFromStorage);
      history.push('/home');
    }).catch(_ => {
      alert('character save failed');
    });
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

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage);
