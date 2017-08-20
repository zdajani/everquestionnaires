class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update, :destroy]


  # GET an array of answer and question_id objects and save them in database 
  # to-do: add check for errors
  def create
    answers = answer_params[:answers]
    answers.map do | a |
      Question.find(a[:question_id]).answers.create(response: a[:response])
    end
    render status: :created
  end
  

  private
    # Only allow a trusted parameter "white list" through.
    def answer_params
      params.permit(answers: [:question_id, :response])
    end
end
