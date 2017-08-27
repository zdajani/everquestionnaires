class Questionnaire < ApplicationRecord
  validates :title, presence: true
  has_many :questions
  has_many :answers, -> { select(:id, :response, :question_id, :user_id, :created_at) }
  
  belongs_to :user
  
  validates_associated :questions
  accepts_nested_attributes_for :questions
  validates :user, presence: true
  
  
  # formate answers data to get username and date for each group of answers
  def answers_data
    formatted = []
    self.answers.group_by(&:user_id).each do |user_id, answers|
      formatted << {
        username: answers.first.user.username, #get username from single answer
        date: answers.first.created_at, #get created_at from single answer
        answers: answers
      }
    end
    formatted
  end
end
