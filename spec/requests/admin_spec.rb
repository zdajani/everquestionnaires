RSpec.describe 'Admin', type: :request do
  describe 'GET /admin' do
    it 'returns a questionnaire' do
      questionnaire = create(:questionnaire_with_answers)
      headers = authorize_user_header(questionnaire.user)

      get questionnaire_responses_path(questionnaire.id), headers: headers
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /admin/questionnaires' do
    it 'returns a questionnaire with all responses' do
      questionnaire = create(:questionnaire_with_answers)
      headers = authorize_user_header(questionnaire.user)

      get questionnaire_responses_path(questionnaire.id), headers: headers
      expect(response).to have_http_status(:success)

      questionnaire_data = {
        questionnaire: questionnaire,
        questions: questionnaire.questions.select('id', 'name', 'label'),
        usersAnswers: questionnaire.answers_data
      }.to_json

      expect(response.body).to eq(questionnaire_data)
    end
  end
end
