 import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
    handleFieldChange(e, props.saveCharacterClass);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button className="customButton" type="submit"
            disabled={ !charClass }>Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Warrior
          <input type="radio" name="charClass" value="warrior"
              onChange={ handleChange } />
        </label>
        <label>Wizard
          <input type="radio" name="charClass" value="wizard"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2Form);
