 import React, { useEffect } from 'react';
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
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      charClass: props.class
    },
    onSubmit: values => {
      history.push('/page3');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Warrior
          <input type="radio" name="charClass" value="warrior"
              onChange={ e => handleFieldChange(e, props.saveCharacterClass) } />
        </label>
        <label>Wizard
          <input type="radio" name="charClass" value="wizard"
              onChange={ e => handleFieldChange(e, props.saveCharacterClass) } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2Form);
