import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      skinColor: props.skinColor
    },
    onSubmit: values => {
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
          <input type="radio" name="skinColor" value="white"
              onChange={ e => handleFieldChange(e, props.saveCharacterSkinColor) } />
        </label>
        <label>Black
          <input type="radio" name="skinColor" value="black"
              onChange={ e => handleFieldChange(e, props.saveCharacterSkinColor) } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3Form);
