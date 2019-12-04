import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
    handleFieldChange(e, props.saveCharacterEyeColor);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button className="customButton" type="submit"
            disabled={ !eyeColor }>Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Blue
          <input type="radio" name="eyeColor" value="blue"
              onChange={ handleChange } />
        </label>
        <label>Brown
          <input type="radio" name="eyeColor" value="brown"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4Form);
