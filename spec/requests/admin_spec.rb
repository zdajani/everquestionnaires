RSpec.describe "admin", type: :request do
  describe "GET /admin" do
    #todo refactor 
    it 'returns a questionnaire' do
      create(:questionnaire_with_questions) 
      questionnaire = Questionnaire.first
      questionOne = questionnaire.questions[0]
      questionTwo = questionnaire.questions[1]
    
      answerOne = create(:answer, question_id: questionOne.id )
      answerTwo = create(:answer, question_id: questionTwo.id)
      headers = authorize_user_header(questionnaire.user)
      
      get questionnaire_responses_path(questionnaire.id)
      expect(response).to have_http_status(:success)
      # binding.pry
      # expect(json).to include({
      #   id: questionOne.id,
      #   name: questionOne.name,
      #   label: questionOne.label,
      #   answers: [{ 
      #     response: answerOne.response,
      #     user: {
      #       id: answerOne.user.id,
      #       username: answerOne.user.username
      #     }
      #   }]
      # })
    end
  end
end