export const answersData = [
  { 
    id: 1,
    question_id: 1,
    response: "Pellentesque in ipsum id orci porta dapibus."
  },{
    id: 2,
    question_id: 2,
    response: "Vivamus suscipit tortor eget felis porttitor."
  },
]

const questions = {
  1: { 
    id: 1,
    name: "Ragdoll traits",
    label: "describe ragdoll traits" 
  },
  2: {
    id: 2,
    name: "Persian traits",
    label: "describe persian traits" 
  }
};

export const questionnaireData = {
  id: 1,
  title: "Cat breeds",
  created_at: "2017-08-18T00:02:54.066Z",
  updated_at: "2017-08-18T00:02:54.066Z",
  questions: questions
};

export const answersTableData = {
  questionnaire: questions[1],
  questions: [questions[1],questions[2]],
  usersAnswers: [{
    username: 'user1',
    date: "2017-08-18T00:02:54.066Z",
    answers: answersData
  }]
};

