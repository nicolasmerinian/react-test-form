import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormHeader from './FormHeader';
import {
  getCharacterName,
  saveCharacterName
} from '../actions/characterActions';
import { handleFieldChange } from '../utils/behaviors';

const mapStateToProps = characterState => ({
  name: characterState.name
});

const mapDispatchToProps = dispatch => ({
  getCharacterName: () => dispatch(getCharacterName()),
  saveCharacterName: (name) => dispatch(saveCharacterName(name))
});

const Page7Form = props => {
  const [ name, setName ] = useState('');
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: props.name
    },
    onSubmit: _ => {
      history.push('/final');
    },
  });

  function handleChange(e) {
    setName(e.target.value);
    handleFieldChange(e, props.saveCharacterName);
  }

  return (
    <form className="nameForm" onSubmit={ formik.handleSubmit }>
      <FormHeader back={ '/page6' } next={ '/final' } disabled={ !name }/>
      <span style={{ display: 'flex' }}>
        <label htmlFor="name">Give your character a name</label>
        <input id="name" type="text" name="name" onChange={ handleChange } />
      </span>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page7Form);
