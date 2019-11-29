import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { getCharacterGender, saveCharacterGender } from '../actions/characterActions';

const mapStateToProps = characterState => ({
  gender: characterState.gender
});

const mapDispatchToProps = dispatch => ({
  getCharacterGender: () => dispatch(getCharacterGender()),
  saveCharacterGender: (gender) => dispatch(saveCharacterGender(gender))
});

const Page1Form = props => {
  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      switch: props.gender
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const gender = values.switch ? 'F' : 'M';
      props.saveCharacterGender(gender);
    },
  });

  function onNextClick() {
    alert('todo');
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <input id="switch" name="switch" type="checkbox" value={ formik.values.switch } onChange={ formik.handleChange } />
      <label htmlFor="switch">Toggle</label>
      <button type="submit">Next</button>
      <p></p>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1Form);
