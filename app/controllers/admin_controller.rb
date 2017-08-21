class AdminController < ApplicationController  
  def index
    @user = current_user
    @questionnaires = @user.questionnaires

    render json: @questionnaires
  end

  # returns a single questionnaire's with questions and answers with user
  def questionnaire_responses
    @questionnaire = Questionnaire.find(params[:id])
    @questions = @questionnaire.questions.select('id', 'name', 'label')
    render json: @questions.to_json(include: { answers: { only: ['response', 'created_at' ], include: :user}})
  end
end
