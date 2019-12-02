 import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterClass,
  saveCharacterClass
} from '../actions/characterActions';

const mapStateToProps = characterState => ({
  class: characterState.class
});

const mapDispatchToProps = dispatch => ({
  getCharacterClass: () => dispatch(getCharacterClass()),
  saveCharacterClass: (charClass) => dispatch(saveCharacterClass(charClass))
});

const Page2Form = props => {
  let history = useHistory();

  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      charClass: props.class
    },
    onSubmit: values => {
      props.saveCharacterClass(values.charClass);
      history.push('/page3');
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
        <label>Warrior
          <input type="radio" name="charClass" value="warrior" onChange={ formik.handleChange } />
        </label>
        <label>Wizard
          <input type="radio" name="charClass" value="wizard" onChange={ formik.handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2Form);
