import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCharacterGender, saveCharacterGender } from '../actions/characterActions';

const mapStateToProps = characterState => ({
  gender: characterState.gender
});

const mapDispatchToProps = dispatch => ({
  getCharacterGender: () => dispatch(getCharacterGender()),
  saveCharacterGender: (gender) => dispatch(saveCharacterGender(gender))
});

const Page1Form = props => {
  let history = useHistory();

  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      switch: props.gender
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      const gender = values.switch ? 'F' : 'M';
      props.saveCharacterGender(gender);
      history.push('/page2');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <input id="switch" class="switch" name="switch" type="checkbox" value={ formik.values.switch } onChange={ formik.handleChange } />
      <label class="switch" htmlFor="switch">Toggle</label>
      <button type="submit">Next</button>
      <p></p>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1Form);
