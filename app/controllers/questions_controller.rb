class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :destroy]

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    questionnaire = Questionnaire.find(params[:questionnaire_id])
    @question = questionnaire.questions.build(question_params)

    if @question.save
      render json: @question, status: :created, location: questionnaire_questions_url(@question)
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:name, :label)
    end
end
