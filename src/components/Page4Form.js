import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getCharacterEyeColor,
  saveCharacterEyeColor
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  eyeColor: characterState.eyeColor
});

const mapDispatchToProps = dispatch => ({
  getCharacterEyeColor: () => dispatch(getCharacterEyeColor()),
  saveCharacterEyeColor: (eyeColor) => dispatch(saveCharacterEyeColor(eyeColor))
});

const Page4Form = props => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      eyeColor: props.eyeColor
    },
    onSubmit: values => {
      history.push('/page5');
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <header>
        <button class="customButton" type="submit">Next</button>
      </header>
      <span style={{ display: 'flex' }}>
        <label>Blue
          <input type="radio" name="eyeColor" value="blue"
              onChange={ e => handleFieldChange(e, props.saveCharacterEyeColor) } />
        </label>
        <label>Brown
          <input type="radio" name="eyeColor" value="brown"
              onChange={ e => handleFieldChange(e, props.saveCharacterEyeColor) } />
        </label>
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page4Form);
