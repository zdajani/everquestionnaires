require 'rails_helper'


RSpec.describe QuestionnairesController, type: :controller do
  before(:each) do 
    user = create(:user)
    authorize_user(user)
  end
  
  let(:valid_attributes) {
    build(:questionnaire).attributes
  }

  let(:invalid_attributes) {
    build(:questionnaire, title: "").attributes
  }

  describe "POST #create" do
    context "with valid params" do
      it "creates a new questionnaire" do
        expect {
          post :create, params: {questionnaire: valid_attributes}
        }.to change(Questionnaire, :count).by(1)
      end
    end

    context "with invalid params" do
      it "does not create a new questionnaire" do
        expect {
          post :create, params: {questionnaire: invalid_attributes}
        }.to_not change(Questionnaire, :count)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested questionnaire" do
      questionnaire = Questionnaire.create! valid_attributes
      
      expect {
        delete :destroy, params: {id: questionnaire.to_param}
      }.to change(Questionnaire, :count).by(-1)
    end
  end
end
