class AdminController < ApplicationController  
  before_action :authenticate_user
  # get all questionnaires a user created 
  def index
    @questionnaires = current_user.questionnaires

    render json: @questionnaires
  end

  # returns a single questionnaire's with questions and answers with user
  def questionnaire_responses
    if questionnaire = current_user.questionnaires.find(params[:id])
    
      @questionnaire_data = { 
        questionnaire: questionnaire, 
        questions: questionnaire.questions,
        usersAnswers: questionnaire.answers_data
      }.to_json
      
      render json: @questionnaire_data
    else
      render status: :not_found
    end
  end
end
