import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterClothesColor,
  saveCharacterClothesColor
} from '../actions/characterActions';

const mapStateToProps = characterState => ({
  clothesColor: characterState.clothesColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterClothesColor: () => dispatch(getCharacterClothesColor()),
  saveCharacterClothesColor: (clothesColor) => dispatch(saveCharacterClothesColor(clothesColor))
});

const Page6Form = props => {
  let history = useHistory();

  // Pass the useFormik() hook initial form values and a submit function that
  // will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      clothesColor: props.clothesColor
    },
    onSubmit: values => {
      props.saveCharacterClothesColor(values.clothesColor);
      // history.push('/page7');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <label>Red
        <input type="radio" name="clothesColor" value="red" onChange={ formik.handleChange } />
      </label>
      <label>Black
        <input type="radio" name="clothesColor" value="black" onChange={ formik.handleChange } />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page6Form);
