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
        <label className="labelButton">Blue
          <input type="radio" name="eyeColor" value="blue"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Brown
          <input type="radio" name="eyeColor" value="brown"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Green
          <input type="radio" name="eyeColor" value="green"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Red
          <input type="radio" name="eyeColor" value="red"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4Form);
