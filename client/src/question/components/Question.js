import React from 'react'
import PropTypes from 'prop-types'

const Question = ({name, label}) => (
  <>
    <h4>
      {name}
    </h4>
    <h6>
      {label}
    </h6>
  </>
)

Question.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Question