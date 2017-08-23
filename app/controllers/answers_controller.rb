class AnswersController < ApplicationController
  # GET an array of answer and question_id objects and save them in database 
  # to-do: add check for errors and create helper method for below
  def create
    answers = answer_params[:answers]
    answers.map do | a |
      Question.find(a[:question_id]).answers.create(
      response: a[:response], 
      user_id: current_user.id,
      questionnaire_id: params[:questionnaire_id])
    end

    render status: :created
  end
  
  private
    # Only allow a trusted parameter "white list" through.
    def answer_params
      params.permit(answers: [:question_id, :response], answer: {})
    end
end
