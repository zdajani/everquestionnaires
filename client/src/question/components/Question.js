import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ name, label }) => (
  <div>
    <div>
      {name}
    </div>
    <div>
      {label}
    </div>
  </div>  
);

Question.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Question;