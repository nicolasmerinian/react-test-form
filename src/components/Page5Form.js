import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterHairColor,
  saveCharacterHairColor
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  hairColor: characterState.hairColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterHairColor: () => dispatch(getCharacterHairColor()),
  saveCharacterHairColor: (hairColor) => dispatch(saveCharacterHairColor(hairColor))
});

const Page5Form = props => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      hairColor: props.hairColor
    },
    onSubmit: values => {
      history.push('/page6');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Blond
          <input type="radio" name="hairColor" value="blond"
              onChange={ e => handleFieldChange(e, props.saveCharacterHairColor) } />
        </label>
        <label>Brown
          <input type="radio" name="hairColor" value="brown"
              onChange={ e => handleFieldChange(e, props.saveCharacterHairColor) } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page5Form);
