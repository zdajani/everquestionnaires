class Questionnaire < ApplicationRecord
  validates :title, presence: true
  has_many :questions
  accepts_nested_attributes_for :questions
end
