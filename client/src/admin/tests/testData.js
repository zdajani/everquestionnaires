const questions = {
  1: { 
    id: 1,
    name: 'Ragdoll traits',
    label: 'describe ragdoll traits' 
  },
  2: {
    id: 2,
    name: 'Persian traits',
    label: 'describe persian traits' 
  }
}


const questionnaire = {
  title: 'Cat breeds',
  id: 1
}

const questionnaireTwo = {
  title: 'Cat breeds Questionnaire Part 2',
  id: 2
}

export const formattedData = {
  1: { 
    title: questionnaire.title, 
    id: questionnaire.id
  },
  2: {   
    title: questionnaireTwo.title, 
    id: questionnaireTwo.id
  }
}

export const apiData = [
  {
    title: questionnaire.title, 
    id: questionnaire.id
  },
  {   
    title: questionnaireTwo.title, 
    id: questionnaireTwo.id
  }
]

export const questionaireFormattedData = {
  1: { 
    title: questionnaire.title, 
    id: questionnaire.id
  },
  2: {   
    title: questionnaireTwo.title, 
    id: questionnaireTwo.id
  }
}