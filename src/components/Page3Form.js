import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import {
  getCharacterSkinColor,
  saveCharacterSkinColor
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  skinColor: characterState.skinColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterSkinColor: () => dispatch(getCharacterSkinColor()),
  saveCharacterSkinColor: (skinColor) => dispatch(saveCharacterSkinColor(skinColor))
});

const Page3Form = props => {
  const [ skinColor, setSkinColor ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      skinColor: props.skinColor
    },
    onSubmit: _ => {
      history.push('/page4');
    },
  });

  function handleChange(e) {
    setSkinColor(e.target.value);
    handleFieldChange(e, props.saveCharacterSkinColor);
  }

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/page2' } next={ '/page4' } disabled={ !skinColor }/>
      <span>
        <label className="labelButton">White
          <input type="radio" name="skinColor" value="white"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Yellow
          <input type="radio" name="skinColor" value="yellow"
              onChange={ handleChange } />
        </label>
        <label className="labelButton">Black
          <input type="radio" name="skinColor" value="black"
              onChange={ handleChange } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3Form);
