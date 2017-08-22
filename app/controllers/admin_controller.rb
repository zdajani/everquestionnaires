class AdminController < ApplicationController  
  def index
    @questionnaires = current_user.questionnaires

    render json: @questionnaires.to_json(include: :questions)
  end

  # returns a single questionnaire's with questions and answers with user
  def questionnaire_responses
    @questionnaire = Questionnaire.find(params[:id])
    @questions = @questionnaire.questions.select('id', 'name', 'label')
    
    answers = Answer.select('response', 'user_id', 'question_id', 'created_at', 'id').where(questionnaire_id: @questionnaire.id).group_by(&:user_id)
    # add username and date created to each group of answers
    # more to model?
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
      users_answers: @answers_formatted 
    }
    
    render json: @questionnaire_data.to_json
  end
end
