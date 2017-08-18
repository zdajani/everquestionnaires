class Questionnaire < ApplicationRecord
  validates :title, presence: true
  has_many :questions
end
