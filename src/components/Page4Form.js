import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import {
  getCharacterEyeColor,
  saveCharacterEyeColor
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  eyeColor: characterState.eyeColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterEyeColor: () => dispatch(getCharacterEyeColor()),
  saveCharacterEyeColor: (eyeColor) => dispatch(saveCharacterEyeColor(eyeColor))
});

const Page4Form = props => {
  const [ eyeColor, setEyeColor ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      eyeColor: props.eyeColor
    },
    onSubmit: _ => {
      history.push('/page5');
    },
  });

  function handleChange(e) {
    setEyeColor(e.target.value);
    handleFieldChange(props.saveCharacterEyeColor, e.target.value);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/page3' } next={ '/page5' } disabled={ !eyeColor }/>
      <span>
        <input id="radioEyeBlue" type="radio" name="eyeColor" value="blue"
            onChange={ handleChange } />
        <label htmlFor="radioEyeBlue" className="labelButton">Blue
        </label>
        <input id="radioEyeBrown" type="radio" name="eyeColor" value="brown"
            onChange={ handleChange } />
        <label htmlFor="radioEyeBrown" className="labelButton">Brown
        </label>
        <input id="radioEyeGreen" type="radio" name="eyeColor" value="green"
            onChange={ handleChange } />
        <label htmlFor="radioEyeGreen" className="labelButton">Green
        </label>
        <input id="radioEyeRed" type="radio" name="eyeColor" value="red"
            onChange={ handleChange } />
        <label htmlFor="radioEyeRed" className="labelButton">Red
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4Form);
