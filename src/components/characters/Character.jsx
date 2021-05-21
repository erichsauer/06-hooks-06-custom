import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, affiliation, photoUrl }) {
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        {name}
        {affiliation && `: ${affiliation}`}
      </figcaption>
    </figure>
  );
}

Character.propTypes = {};

export default Character;
