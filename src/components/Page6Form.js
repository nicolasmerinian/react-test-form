import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import {
  getCharacterClothesColor,
  saveCharacterClothesColor
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  clothesColor: characterState.clothesColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterClothesColor: () => dispatch(getCharacterClothesColor()),
  saveCharacterClothesColor: (clothesColor) => dispatch(saveCharacterClothesColor(clothesColor))
});

const Page6Form = props => {
  const [ clothesColor, setClothesColor ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      clothesColor: props.clothesColor
    },
    onSubmit: _ => {
      history.push('/page7');
    },
  });

  function handleChange(e) {
    setClothesColor(e.target.value);
    handleFieldChange(props.saveCharacterClothesColor, e.target.value);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/page5' } next={ '/page7' } disabled={ !clothesColor }/>
      <span>
        <label className="labelButton">Red
          <input type="radio" name="clothesColor" value="red"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Black
          <input type="radio" name="clothesColor" value="black"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page6Form);
