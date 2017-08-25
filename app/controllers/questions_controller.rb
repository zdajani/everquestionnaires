class QuestionsController < ApplicationController
  #create all questions for a questionnaire
  def create
    questionnaire = Questionnaire.find(params[:questionnaire_id])
    @question = questionnaire.questions.build(question_params)

    if @question.save
      render json: @question, status: :created, location: questionnaire_questions_url(@question)
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  
  private
    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:name, :label)
    end
end
