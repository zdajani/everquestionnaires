export const validate = values => {
  // note: need to add validation for uniqueness
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  
  if (!values.questions || !values.questions.length) {
    errors.questions = { _error: 'At least one question must be entered' }
  } else {
    const questionsArrayErrors = []
    values.questions.forEach((question, questionIndex) => {
      const questionErrors = {}
      if (!question || !question.name) {
        questionErrors.name = 'Required'
        questionsArrayErrors[questionIndex] = questionErrors
      }
      if (!question || !question.label) {
        questionErrors.label = 'Required'
        questionsArrayErrors[questionIndex] = questionErrors
      }
    })
    if (questionsArrayErrors.length) {
      errors.questions = questionsArrayErrors
    }
  }
  return errors
}
