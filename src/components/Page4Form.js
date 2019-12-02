import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterEyeColor,
  saveCharacterEyeColor
} from '../actions/characterActions';

const mapStateToProps = characterState => ({
  eyeColor: characterState.eyeColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterEyeColor: () => dispatch(getCharacterEyeColor()),
  saveCharacterEyeColor: (eyeColor) => dispatch(saveCharacterEyeColor(eyeColor))
});

const Page4Form = props => {
  let history = useHistory();

  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      eyeColor: props.eyeColor
    },
    onSubmit: values => {
      props.saveCharacterEyeColor(values.eyeColor);
      history.push('/page5');
    },
  });

  useEffect(() => {
    // props.saveCharacterClass(values.charClass);
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Blue
          <input type="radio" name="eyeColor" value="blue" onChange={ formik.handleChange } />
        </label>
        <label>Brown
          <input type="radio" name="eyeColor" value="brown" onChange={ formik.handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4Form);
