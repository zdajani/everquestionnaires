class User < ApplicationRecord
  has_secure_password
  has_many :answers
  has_many :questionnaires

  validates :username, presence: true, uniqueness: {
    case_sensitive: false,
    message: 'username has already been taken'
  }

  def self.from_token_request(request)
    username = request.params['auth'] && request.params['auth']['username']
    find_by username: username
  end
end
