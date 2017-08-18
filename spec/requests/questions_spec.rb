require 'rails_helper'
  
RSpec.describe "Questions", type: :request do
  describe "GET /question" do
    it 'returns a specific question' do
      question = create(:question) 
      get questionnaire_question_path(questionnaire_id: question.id, id: question.id)
      
      expect(response).to have_http_status(:success)
      # needed to add exceptions for dates because of the formating
      expect(json.except('created_at', 'updated_at')).to eq(question.attributes.except('created_at', 'updated_at')) 
    end
  end
  
  describe "POST /question" do
    it 'creates a new question' do 
      questionnaire = create(:questionnaire)
      question = attributes_for(:question)
      post questionnaire_questions_path(questionnaire_id: questionnaire.id, question: question)
      
      expect(response).to have_http_status(:created)
    end
    
    it "renders a JSON response with errors for the new question" do
      questionnaire = create(:questionnaire)
      question = build(:question, name: "").attributes
      post questionnaire_questions_path(questionnaire_id: questionnaire.id, question: question)
      
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
