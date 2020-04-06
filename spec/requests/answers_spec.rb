RSpec.describe 'Answers', type: :request do
  describe 'POST /answers' do
    it 'creates answers for questions provided' do
      questions = create_pair(:question)
      answers = build_pair(:answer)
      user = create(:user)

      params = { answers: [{
        question_id: questions[0].id,
        response: answers[0].response
      }, {
        question_id: questions[1].id,
        response: answers[1].response
      }] }

      headers = authorize_user_header(user)

      post answers_path, params: params, headers: headers
      expect(response).to have_http_status(:created)
    end
  end
end
