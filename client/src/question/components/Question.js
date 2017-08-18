import React from 'react';
import PropTypes from 'prop-types';

//only need access to title for now
const Question = ({ name, label }) => (
  <li>
    <div>
      {name}
    </div>
    <div>
      {label}
    </div>  
  </li>
);

Question.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Question;