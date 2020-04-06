def authorize_user(user)
  token = Knock::AuthToken.new(payload: { sub: user.id }).token
  headers = { 'Authorization' => "Bearer #{token}" }

  request.headers.merge! headers
end

def authorize_user_header(user)
  token = Knock::AuthToken.new(payload: { sub: user.id }).token
  { 'Authorization' => "Bearer #{token}" }
end
