require 'rails_helper'

RSpec.describe Questionnaire, type: :model do
  it { should validate_presence_of(:title) }
end
