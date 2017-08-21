class Question < ApplicationRecord
  belongs_to :questionnaire 
  has_many :answers
  
  validates :questionnaire, presence: true
  validates :name, presence: true
  validates :name, uniqueness: { scope: :questionnaire_id, case_sensitive: true }
end
