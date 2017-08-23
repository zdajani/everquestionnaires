class AdminController < ApplicationController  
  def index
    @questionnaires = current_user.questionnaires

    render json: @questionnaires
  end

  # returns a single questionnaire's with questions and answers with user
  def questionnaire_responses
    if  @questionnaire = Questionnaire.where(id: params[:id]).first
      @questions = @questionnaire.questions.select('id', 'name', 'label')
      
      answers =  @questionnaire.answers.select('response', 'question_id', 'created_at', 'id', 'user_id').group_by(&:user_id)
    
      # add username and date created to each group of answers
      # move to model?
      @answers_formatted = []
      answers.map do |a|
        #first returns id, second returns a single answer
        single_answer = a.second.first
        @answers_formatted << { 
          username: single_answer.user.username,  
          date: single_answer.created_at,
          #todo return just response and question_id
          answers: a.second}
      end
      
      @questionnaire_data = { 
        questionnaire: @questionnaire, 
        questions: @questions,
        usersAnswers: @answers_formatted 
      }
      
      render json: @questionnaire_data.to_json
    else
      render status: :not_found
    end
  end
end
