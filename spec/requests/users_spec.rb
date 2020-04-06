RSpec.describe 'Users', type: :request do
  describe 'POST /users' do
    before(:each) do
      user = attributes_for(:user)
      post users_path(user: user)
    end

    it 'creates a new user' do
      expect(response).to have_http_status(:created)
    end

    it 'returns a jwt token' do
      expect(json.keys).to eq(['jwt'])
    end
  end
end
