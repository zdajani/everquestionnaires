import React, {useCallback} from 'react'

const UserResponseRows = ({usersAnswers, questions})=> {
  const response = useCallback((question, answers) => {
    const userAnswer = answers.find(x => x.question_id === question.id)

    return userAnswer ? userAnswer.response : null
  }, [])

  return (
    usersAnswers.map((userAnswers, index) => (
      <tr key={index}>
        <th scope='row'>{index + 1}</th>
        <td>{userAnswers.username}</td>
        {
          questions.map((question, index) => (
            <td key={index}> {response(question, userAnswers.answers)}</td>)
          )
        }
        <td>{new Date(userAnswers.date).toDateString()}</td>
      </tr>
    ))
  )
}

export default UserResponseRows