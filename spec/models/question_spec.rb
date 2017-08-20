require 'rails_helper'

RSpec.describe Question, type: :model do
  it { should validate_presence_of(:name) }
  it { should belong_to(:questionnaire) }
  it { should validate_presence_of(:questionnaire) }
  it { should validate_uniqueness_of(:name).scoped_to(:questionnaire_id) } 
  it { should have_many(:answers) }
end
