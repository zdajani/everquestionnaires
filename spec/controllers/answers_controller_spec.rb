require 'rails_helper'

RSpec.describe AnswersController, type: :controller do
  before(:each) do
    user = create(:user)
    authorize_user(user)
  end

  describe 'POST #create' do
    it 'creates a new Answer' do
      questions = create_pair(:question)
      answers = build_pair(:answer)

      answers_array = [{
        question_id: questions[0].id,
        response: answers[0].response
      }, {
        question_id: questions[1].id,
        response: answers[1].response
      }]

      expect {
        post :create, params: {
          answers: answers_array,
          questionnaire_id: questions[0].questionnaire.id
        }
      }.to change(Answer, :count).by(2)
    end
  end
end
