class Questionnaire < ApplicationRecord
  validates :title, presence: true
  has_many :questions
  validates_associated :questions
  accepts_nested_attributes_for :questions
end
