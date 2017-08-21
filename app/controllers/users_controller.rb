class UsersController < ApplicationController
  # to create a new user and authenticate them 
  def create
    @user = User.new(user_params)
    if @user.save 
      @token = { jwt: Knock::AuthToken.new(payload: { sub: @user.id }).token }
      render json: @token.to_json, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password_digest)
    end
end
