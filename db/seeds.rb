users = User.create([
  {
    username: "admin",
    password: "password"
  },
  {
    username: "user",
    password: "password"
  }
])

questionnaires = User.first.questionnaires.create([
  {
    title: "Harry Potter Trivia"
  },
  {
    title: "Customer Satisfaction"
  }
])

questionsSetOne = [{
  name: "First book",
  label: "Favourite scene"
},
{
  name: "Characters",
  label: "Favourite character"
}]

questionsSetTwo = [{
  name: "Site experience",
  label: "Is it easy to navigate?"
},
{
  name: "Improvement",
  label: "What needs to be done to make it better"
}]

questionnaires[0].questions.create(questionsSetOne)
questionnaires[1].questions.create(questionsSetTwo)
