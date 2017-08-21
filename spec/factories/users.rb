FactoryGirl.define do
  factory :user do
    username { Faker::GameOfThrones.character }
    password { Faker::GameOfThrones.dragon }
  end
end
