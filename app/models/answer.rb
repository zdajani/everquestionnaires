class Answer < ApplicationRecord
  belongs_to :question
  # returns just the username and id of user associated
  belongs_to :user, -> { select(:username, :id) }
  belongs_to :questionnaire
  
  validates :question, presence: true
  validates :response, presence: true
  validates :user, presence: true
  validates :questionnaire, presence: true
  
  private 
  # add username and date created to each group of answers
   def self.format_for_api(questionnaire) 
     answers = questionnaire.answers.select('response', 'question_id', 'created_at', 'id', 'user_id').group_by(&:user_id)
     formatted = []
     answers.map do |a|
       #first returns id, second returns a single answer
       single_answer = a.second.first
       formatted << { 
         username: single_answer.user.username,  
         date: single_answer.created_at,
         #todo return just response and question_id
         answers: a.second }
     end
     formatted
   end
end
