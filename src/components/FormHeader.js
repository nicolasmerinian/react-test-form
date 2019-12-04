import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormHeader = props => {
  let history = useHistory();

  function onClickBack() {
    history.push(props.back);
  }

  function onClickNext() {
    history.push(props.next);
  }

  return (
    <header>
      <button className="customButton"
          onClick={ onClickBack }>Back</button>
      <button className="customButton" type="submit"
          onClick={ onClickNext } disabled={ props.disabled }>Next</button>
    </header>
  );
};

export default FormHeader;
