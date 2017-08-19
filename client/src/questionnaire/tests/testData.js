export const question = {
    1: { 
      id: 1,
      name: "Ragdoll traits",
      label: "describe ragdoll traits" 
    }
  }

export const questions = {
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

export const questionnaire = {
  title: "Cat breeds"
};




export const formattedData = {
  id: 1,
  title: "Cat breeds",
  created_at: "2017-08-18T00:02:54.066Z",
  updated_at: "2017-08-18T00:02:54.066Z",
  questions: questions
};

export const apiData = {
  id: 1,
  title: "Cat breeds",
  created_at: "2017-08-18T00:02:54.066Z",
  updated_at: "2017-08-18T00:02:54.066Z",
  questions: [
    { 
      id: 1,
      name: "Ragdoll traits",
      label: "describe ragdoll traits" },
      {
       id: 2,
       name: "Persian traits",
       label: "describe persian traits" 
     }
  ]
};

export const questionnaireWithQuestions = {
  title: apiData.title,
  questions: apiData.questions
};