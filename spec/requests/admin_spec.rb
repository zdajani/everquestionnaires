RSpec.describe "admin", type: :request do
  describe "GET /admin" do
    #todo refactor 
    it 'returns a questionnaire' do
      create(:questionnaire_with_questions) 
      questionnaire = Questionnaire.first
      questionOne = questionnaire.questions[0]
      questionTwo = questionnaire.questions[1]
    
      answerOne = create(:answer, 
      question_id: questionOne.id,
      questionnaire_id: questionnaire.id )
      answerTwo = create(:answer, 
      question_id: questionTwo.id,
      questionnaire_id: questionnaire.id)
      headers = authorize_user_header(questionnaire.user)
      
      get questionnaire_responses_path(questionnaire.id)
      expect(response).to have_http_status(:success)
    end
  end
end