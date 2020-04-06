require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  let(:questionnaire) {
    create(:questionnaire)
  }

  let(:valid_attributes) {
    build(:question).attributes
  }

  let(:invalid_attributes) {
    build(:question, name: '').attributes
  }

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new question' do
        expect {
          post :create, params:
          { question: valid_attributes, questionnaire_id: questionnaire.id }
        }.to change(Question, :count).by(1)
      end
    end

    context 'with invalid params' do
      it 'does not create a new question' do
        expect {
          post :create, params: {
            question: invalid_attributes,
            questionnaire_id: questionnaire.id
          }}.to_not change(Question, :count)
      end
    end
  end
end
