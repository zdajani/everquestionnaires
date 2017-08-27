class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user
  belongs_to :questionnaire
  
  validates :question, presence: true
  validates :response, presence: true
  validates :user, presence: true
  validates :questionnaire, presence: true
end
