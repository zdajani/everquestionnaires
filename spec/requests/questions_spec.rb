require 'rails_helper'

RSpec.describe 'Questions', type: :request do
  describe 'POST /question' do
    it 'creates a new question' do
      questionnaire = create(:questionnaire)
      question = attributes_for(:question)
      post questionnaire_questions_path(
        questionnaire_id: questionnaire.id,
        question: question
      )

      expect(response).to have_http_status(:created)
    end

    it 'renders a JSON response with errors for the new question' do
      questionnaire = create(:questionnaire)
      question = build(:question, name: '').attributes
      post questionnaire_questions_path(
        questionnaire_id: questionnaire.id,
        question: question
      )

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
