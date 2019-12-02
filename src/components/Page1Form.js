import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCharacterGender, saveCharacterGender } from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  gender: characterState.gender
});

const mapDispatchToProps = dispatch => ({
  getCharacterGender: () => dispatch(getCharacterGender()),
  saveCharacterGender: (gender) => dispatch(saveCharacterGender(gender))
});

const Page1Form = props => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      switch: props.gender
    },
    onSubmit: values => {
      history.push('/page2');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Woman
          <input type="radio" name="gender" value="F"
              onChange={ e => handleFieldChange(e, props.saveCharacterGender) } />
        </label>
        <label>Man
          <input type="radio" name="gender" value="M"
              onChange={ e => handleFieldChange(e, props.saveCharacterGender) } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1Form);
