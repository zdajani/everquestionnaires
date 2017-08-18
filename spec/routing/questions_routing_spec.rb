require "rails_helper"

RSpec.describe QuestionsController, type: :routing do
  describe "routing" do
    it "routes to #show" do
      expect(:get => "api/questionnaires/1/questions/1").to route_to("questions#show", id: "1", questionnaire_id: "1")
    end

    it "routes to #create" do
      expect(:post => "api/questionnaires/1/questions").to route_to("questions#create", questionnaire_id: "1")
    end

    it "routes to #destroy" do
      expect(:delete => "api/questionnaires/1/questions/1").to route_to("questions#destroy", id: "1", questionnaire_id: "1")
    end
  end
end
