FactoryGirl.define do
  factory :user do
    username { Faker::GameOfThrones.character }
    password_digest { Faker::GameOfThrones.dragon }
  end
end
