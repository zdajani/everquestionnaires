export const validate = values => {
  const errors = {}
  if (values.answers) {
    const response = values.answers.find(x => x.response);
    if (!response) {
      errors.answers = { _error: 'At least one answer must be entered'  } 
    }
  } 
  return errors
}
