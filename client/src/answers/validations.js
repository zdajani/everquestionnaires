export const validate = values => {
  const errors = {}
  // todo: check why error not showing up
  if (values.answers) {
    const response = values.answers.find(x => x.response);
    if (!response) {
      errors.answers =  'At least one answer must be entered' 
    }
  } 
  return errors
}
