import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ characters: state.characters });

const Explorer = props => {

  function getCharactersNames() {
    return props.characters.map(character => character.name);
  }

  return (
    <aside className="explorer">
      <header>Characters</header>
      <section>
        <ul>
          { getCharactersNames().map(name => {
              return <li>{ name }</li>;
          }) }
        </ul>
      </section>
    </aside>
  );
};

export default connect(mapStateToProps)(Explorer);
