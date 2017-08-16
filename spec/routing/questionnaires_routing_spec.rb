require "rails_helper"

RSpec.describe QuestionnairesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "api/questionnaires").to route_to("questionnaires#index")
    end

    it "routes to #show" do
      expect(:get => "api/questionnaires/1").to route_to("questionnaires#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "api/questionnaires").to route_to("questionnaires#create")
    end

    it "routes to #destroy" do
      expect(:delete => "api/questionnaires/1").to route_to("questionnaires#destroy", :id => "1")
    end
  end
end
