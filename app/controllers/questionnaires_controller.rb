class QuestionnairesController < ApplicationController
  before_action :set_questionnaire, only: [:show]

  # get all questionnaires
  def index
    @questionnaires = Questionnaire.all

    render json: @questionnaires
  end

  # a single questionnaire
  def show
    if @questionnaire.questions.exists? 
      render json: @questionnaire.to_json(include: { 
        questions: { only: ['name', 'label', 'id' ]}
      })
    else
      render json: @questionnaire
    end
  end

  # POST /questionnaires
  def create
    #todo: implement uniqness verification on questions when adding them like below
    @questionnaire = current_user.questionnaires.build(questionnaire_params)
    
    if @questionnaire.save
      render json: @questionnaire, status: :created, location: @questionnaire
    else
      render json: @questionnaire.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_questionnaire
      @questionnaire = Questionnaire.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def questionnaire_params
      params.require(:questionnaire).permit(:title, questions_attributes:[:name, :label, :id])
    end
end
