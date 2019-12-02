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
  saveCharacterSkinColor: (skinColor) => dispatch(saveCharacterSkinColor(skinColor))
});

const Page3Form = props => {
  let history = useHistory();

  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      skinColor: props.skinColor
    },
    onSubmit: values => {
      props.saveCharacterSkinColor(values.skinColor);
      history.push('/page4');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>White
          <input type="radio" name="skinColor" value="white" onChange={ formik.handleChange } />
        </label>
        <label>Black
          <input type="radio" name="skinColor" value="black" onChange={ formik.handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3Form);
