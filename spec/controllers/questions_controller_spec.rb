require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  let(:questionnaire) {
    create(:questionnaire)
  }
  # This should return the minimal set of attributes required to create a valid
  # Question. As you add validations to Question, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    build(:question).attributes
  }
  
  let(:invalid_attributes) {
    build(:question, name: "").attributes
  }
  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # QuestionsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "POST #create" do
    context "with valid params" do
      it "creates a new question" do
        expect {
        post :create, params: {question: valid_attributes, questionnaire_id: questionnaire.id }, session: valid_session }.to change(Question, :count).by(1)
      end
    end

    context "with invalid params" do
      it "does not create a new question" do
        expect {
          post :create, params: {question: invalid_attributes, questionnaire_id: questionnaire.id }
        }.to_not change(Question, :count)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested question" do
      question = create(:question)
      expect {
        delete :destroy, params: {id: question.id, questionnaire_id: questionnaire.id }, session: valid_session
      }.to change(Question, :count).by(-1)
    end
  end
end
