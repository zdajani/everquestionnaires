import React from 'react'
import PropTypes from 'prop-types'

//only need access to title for now
const Questionnaire = ({ title }) => (
  <li>
    {title}
  </li>
);

Questionnaire.propTypes = {
  title: PropTypes.string.isRequired
};

export default Questionnaire;