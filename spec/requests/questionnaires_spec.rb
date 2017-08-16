require 'rails_helper'

RSpec.describe "Questionnaires", type: :request do
  describe "GET /questionnaires" do
    it "returns all questionnaires" do
      create_list(:questionnaire, 10)
      get questionnaires_path
      
      expect(response).to have_http_status(:success)
      expect(json.size).to eq(10)
    end
  end
  
  describe "GET /questionnaire" do
    it 'returns a specific questionnaire' do
      questionnaire = create(:questionnaire) 
      get questionnaire_path(questionnaire.id)
      expect(response).to have_http_status(:success)
      # needed to add exceptions for dates because of the formating
      expect(json.except('created_at', 'updated_at')).to eq(questionnaire.attributes.except('created_at', 'updated_at')) 
    end
  end
  
  describe "POST /questionnaire" do
    it 'creates a new questionnaire' do 
      post questionnaires_path, params: { questionnaire: build(:questionnaire).attributes }
    
      expect(response).to have_http_status(:created)
      expect(Questionnaire.find(json["id"])).to be_present
    end
  end
end
