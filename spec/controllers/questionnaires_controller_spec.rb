require 'rails_helper'

RSpec.describe QuestionnairesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Questionnaire. As you add validations to Questionnaire, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    build(:questionnaire).attributes
  }

  let(:invalid_attributes) {
    build(:questionnaire, title: "").attributes
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # QuestionnairesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      questionnaire = Questionnaire.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      questionnaire = Questionnaire.create! valid_attributes
      get :show, params: {id: questionnaire.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Questionnaire" do
        expect {
          post :create, params: {questionnaire: valid_attributes}, session: valid_session
        }.to change(Questionnaire, :count).by(1)
      end

      it "renders a JSON response with the new questionnaire" do
        post :create, params: {questionnaire: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(questionnaire_url(Questionnaire.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new questionnaire" do
        post :create, params: {questionnaire: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested questionnaire" do
      questionnaire = Questionnaire.create! valid_attributes
      expect {
        delete :destroy, params: {id: questionnaire.to_param}, session: valid_session
      }.to change(Questionnaire, :count).by(-1)
    end
  end

end
