require "rails_helper"

RSpec.describe AnswersController, type: :routing do
  describe "routing" do
    it "routes to #create" do
      expect(:post => "api/answers").to route_to("answers#create")
    end
  end
end
