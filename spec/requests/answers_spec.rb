require 'rails_helper'

RSpec.describe "Answers", type: :request do
  describe "POST /answers" do
    it 'creates answers for questions provided' do 
      questions = create_pair(:question)
      answers = build_pair(:answer)
      
      params = { answers: [{
        question_id: questions[0],
        response: answers[0].response
      },{
        question_id: questions[1].id, 
        response: answers[1].response
      }]} 
      
      post answers_path(params)
      expect(response).to have_http_status(:created)
    end
  end
end
