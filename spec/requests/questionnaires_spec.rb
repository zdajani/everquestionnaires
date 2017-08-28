require 'rails_helper'

RSpec.describe "Questionnaires", type: :request do
  describe "GET /questionnaires" do
    it "returns all questionnaires" do
      create_list(:questionnaire, 5)
      get questionnaires_path

      expect(response).to have_http_status(:success)
      expect(json.size).to eq(5)
    end
  end
  
  describe "GET /questionnaire" do
    it 'returns a specific questionnaire' do
      questionnaire = create(:questionnaire) 
      get questionnaire_path(questionnaire.id)  
      
      expect(response).to have_http_status(:success)
      expect(response.body).to eq(questionnaire.to_json) 
    end
    
    it 'returns a specific questionnaire and its questions' do
      questionnaire = create(:questionnaire_with_questions) 
    
      get questionnaire_path(questionnaire.id)
      
      expect(response).to have_http_status(:success)
      
      # use with_indifferent_access to account for difference in hashs
      # to_a.map(&:serializable_hash) returns the attributes for questions
      # instead of an instance of the object itself 
      expect(json.with_indifferent_access).to include({
        id: questionnaire.id,
        title: questionnaire.title,
        questions: questionnaire.questions.select('id','name', 'label').to_a.map(&:serializable_hash)
      })
    end
  end
  
  describe "POST /questionnaire" do
    let(:headers) {
      user = create(:user)
      authorize_user_header(user)
    }
    
    it 'creates a new questionnaire with questions' do 
      questions = attributes_for_list(:question, 2)
      
      params = { questionnaire: { 
          title: build(:questionnaire).title, 
          questions_attributes: questions
        }
      }

      post questionnaires_path, params: params, headers: headers
  
      expect(response).to have_http_status(:created)
    end
        
    it "renders a JSON response with errors for the new questionnaire" do
      questionnaire = build(:questionnaire, title: "").attributes
      post questionnaires_path, params: {questionnaire: questionnaire}, headers: headers
      
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
