RSpec.describe AdminController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/admin').to route_to('admin#index')
    end

    it 'routes to #questionnaire_responses' do
      expect(get: 'api/admin/questionnaires/1')
        .to route_to('admin#questionnaire_responses', id: '1')
    end
  end
end
