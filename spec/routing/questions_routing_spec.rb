require 'rails_helper'

RSpec.describe QuestionsController, type: :routing do
  describe 'routing' do
    it 'routes to #create' do
      expect(post: 'api/questionnaires/1/questions').to route_to(
        'questions#create', questionnaire_id: '1'
      )
    end
  end
end
