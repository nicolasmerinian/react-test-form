import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterHairColor,
  saveCharacterHairColor
} from '../actions/characterActions';

const mapStateToProps = characterState => ({
  hairColor: characterState.hairColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterHairColor: () => dispatch(getCharacterHairColor()),
  saveCharacterHairColor: (hairColor) => dispatch(saveCharacterHairColor(hairColor))
});

const Page5Form = props => {
  let history = useHistory();

  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      hairColor: props.hairColor
    },
    onSubmit: values => {
      props.saveCharacterHairColor(values.hairColor);
      history.push('/page6');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Blond
          <input type="radio" name="hairColor" value="blond" onChange={ formik.handleChange } />
        </label>
        <label>Brown
          <input type="radio" name="hairColor" value="brown" onChange={ formik.handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page5Form);
