class Questionnaire < ApplicationRecord
  validates :title, presence: true
  has_many :questions
  has_many :answers
  belongs_to :user
  
  validates_associated :questions
  accepts_nested_attributes_for :questions
  validates :user, presence: true
end
