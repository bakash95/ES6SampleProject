import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ name }) => {
  return <h1>Hello im from name {name}</h1>;
}

Name.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name;
