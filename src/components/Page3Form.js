import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterSkinColor,
  saveCharacterSkinColor
} from '../actions/characterActions';

const mapStateToProps = characterState => ({
  skinColor: characterState.skinColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterSkinColor: () => dispatch(getCharacterSkinColor()),
  saveCharacterSkinColor: (charClass) => dispatch(saveCharacterSkinColor(charClass))
});

const Page3Form = props => {
  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      skinColor: props.skinColor
    },
    onSubmit: values => {
      props.saveCharacterSkinColor(values.skinColor);
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <label>White
        <input type="radio" name="skinColor" value="white" onChange={ formik.handleChange } />
      </label>
      <label>Black
        <input type="radio" name="skinColor" value="black" onChange={ formik.handleChange } />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3Form);
