 import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import {
  getCharacterClass,
  saveCharacterClass
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  class: characterState.class
});

const mapDispatchToProps = dispatch => ({
  getCharacterClass: () => dispatch(getCharacterClass()),
  saveCharacterClass: (charClass) => dispatch(saveCharacterClass(charClass))
});

const Page2Form = props => {
  const [ charClass, setCharClass ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      charClass: props.class
    },
    onSubmit: _ => {
      history.push('/page3');
    },
  });

  function handleChange(e) {
    setCharClass(e.target.value);
    handleFieldChange(props.saveCharacterClass, e.target.value);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/page1' } next={ '/page3' } disabled={ !charClass }/>
      <span>
        <label className="labelButton">Warrior
          <input type="radio" name="charClass" value="warrior"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Wizard
          <input type="radio" name="charClass" value="wizard"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2Form);
