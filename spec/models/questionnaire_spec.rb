require 'rails_helper'

RSpec.describe Questionnaire, type: :model do
  it { should validate_presence_of(:title) }
  it { should have_many(:questions) }
  it { should belong_to(:user) }
  it { should validate_presence_of(:user) }
end
