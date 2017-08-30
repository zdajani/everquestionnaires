# controller for getting admin dashboard, questionnaires, and responses
class AdminController < ApplicationController
  before_action :authenticate_user
  # get all questionnaires a user created
  def index
    @questionnaires = current_user.questionnaires

    render json: @questionnaires
  end

  # returns a single questionnaire's with questions and answers with user
  def questionnaire_responses
    questionnaire = current_user.questionnaires.find(params[:id])
    if questionnaire
      @questionnaire_data = {
        questionnaire: questionnaire,
        questions: questionnaire.questions.select('id', 'name', 'label'),
        usersAnswers: questionnaire.answers_data
      }
      render json: @questionnaire_data
    else
      render status: :not_found
    end
  end
end
