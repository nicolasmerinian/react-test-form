import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
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
  const [ hairColor, setHairColor ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      hairColor: props.hairColor
    },
    onSubmit: _ => {
      history.push('/page6');
    },
  });

  function handleChange(e) {
    setHairColor(e.target.value);
    handleFieldChange(e, props.saveCharacterHairColor);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/page4' } next={ '/page6' } disabled={ !hairColor }/>
      <span style={{ display: 'flex' }}>
        <label>Blond
          <input type="radio" name="hairColor" value="blond"
              onChange={ handleChange } />
        </label>
        <label>Brown
          <input type="radio" name="hairColor" value="brown"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page5Form);
