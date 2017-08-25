class AdminController < ApplicationController  
  # get all questionnaires a user created 
  def index
    @questionnaires = current_user.questionnaires

    render json: @questionnaires
  end

  # returns a single questionnaire's with questions and answers with user
  def questionnaire_responses
    if questionnaire = Questionnaire.where(id: params[:id]).first
    
      questionnaire_data = { 
        questionnaire: questionnaire, 
        questions: questionnaire.questions.select('id', 'name', 'label'),
        usersAnswers: Answer.format_for_api(questionnaire)
        }
      
      render json: questionnaire_data.to_json
    else
      render status: :not_found
    end
  end
end
