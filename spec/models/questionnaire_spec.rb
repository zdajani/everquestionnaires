require 'rails_helper'

RSpec.describe Questionnaire, type: :model do
  it { should validate_presence_of(:title) }
  
  it { should have_many(:questions) }
  it { should accept_nested_attributes_for(:questions) }
  
  it { should belong_to(:user) }
  it { should validate_presence_of(:user) }
  
  
  describe "return answers_data" do
    it "returns answers grouped by user with username and date for each" do
      questionnaire = create(:questionnaire_with_answers)

      expected_results = []
      questionnaire.answers.group_by(&:user).each do |user_id, answers|
        expected_results << {
          username: answers.first.user.username, 
          date: answers.first.created_at, 
          answers: answers}
      end
      
      expect(questionnaire.answers_data).to eq(expected_results)
    end
  end
end
