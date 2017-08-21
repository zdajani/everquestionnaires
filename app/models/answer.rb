class Answer < ApplicationRecord
  belongs_to :question
  # returns just the username and id of user associated
  belongs_to :user, -> { select(:username, :id) }
  
  validates :question, presence: true
  validates :response, presence: true
  validates :user, presence: true
end
