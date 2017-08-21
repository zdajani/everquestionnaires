class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user
  
  validates :question, presence: true
  validates :response, presence: true
  validates :user, presence: true
end
