require 'rails_helper'

RSpec.describe 'Users', type: :request do
  describe 'GET /users' do
    it 'creates a new user' do
      user = attributes_for(:user)
      post users_path(user: user)

      expect(response).to have_http_status(:created)
    end
  end
end
