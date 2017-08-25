everQuestionnaires
=======================
## Synopsis

A basic questionnaire site using Rails Api with React and Redux
and using create-react-app

With the following core features: 

- Creating a questionnaire 
- Answering a questionnaire
- Admin page to see responses to questionnaires created
(but only the questionnaires created by the user currently logged in)

## Technologies and Tools Used

- Language: Ruby, JavaScript
- Framework: Rails, React with Redux
- Database: Active Record, PostgreSQL
- Testing: Rspec, Jest, Enzyme
- Other: foreman, knock, jwt, bcrypt, Bootstrap, 
         axios, react-router, react-router-redux,
         redux-form, redux-thunk, factory_girl_rails,
         shoulda-matchers, faker, database_cleaner,
         create-rails-app

* versions
Ruby 2.4.1
Rails 5.1.3
node 6.11

## How to run
- On command line in root folder bundle 
```
bundle install
cd && yarn
cd ..
```
- Create database and seed data
```
rake db:create db:migrate db:seed
```
- run both the server and the client
```
rake start
```
- http://localhost:3000/ for site
- http://localhost:3001/api for api 

## How to run the test suite
- Rails test in root folder
```
rspec
```
- React tests 
```
cd client && yarn test
```
## Notes on site
- Need to signup or login to answer and create questions and see responses
- After seeding there are two users already:
username: admin
password: password

username: user
password: password

- Admin pages only show questionnaires the currently logged in user created
- A user can answer a questionnaire as many times as they want, but only one 
set of answers will appear 
(this is a bug I need to fix since the answers get saved in the database, I need
  to put a front-end validation to stop users accessing that questionnaire again)


