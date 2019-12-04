import React, { useState } from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
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
  const [ gender, setGender ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      switch: props.gender
    },
    onSubmit: _ => {
      history.push('/page2');
    },
  });

  function handleChange(e) {
    setGender(e.target.value);
    handleFieldChange(props.saveCharacterGender, e.target.value);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/home' } next={ '/page2' } disabled={ !gender }/>
      <span>
        <input id="radioGenderWoman" type="radio" name="gender" value="F"
            onChange={ handleChange } />
        <label className="labelButton" htmlFor="radioGenderWoman">Woman</label>

        <input id="radioGenderMan" type="radio" name="gender" value="M"
            onChange={ handleChange } />
        <label className="labelButton" htmlFor="radioGenderMan">Man</label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1Form);
