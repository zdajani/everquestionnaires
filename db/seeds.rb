User.create(
  [{
    username: 'admin',
    password: 'password'
  }, {
    username: 'user',
    password: 'password'
  }]
)

questionnaires = User.first.questionnaires.create(
  [{
    title: 'Harry Potter Trivia'
  }, {
    title: 'Customer Satisfaction'
  }]
)

questions_set_one = [{
  name: 'First book',
  label: 'Favourite scene'
}, {
  name: 'Characters',
  label: 'Favourite character'
}]

questions_set_two = [{
  name: 'Site experience',
  label: 'Is it easy to navigate?'
}, {
  name: 'Improvement',
  label: 'What needs to be done to make it better'
}]

questionnaires[0].questions.create(questions_set_one)
questionnaires[1].questions.create(questions_set_two)
