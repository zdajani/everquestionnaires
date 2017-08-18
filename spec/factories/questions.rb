FactoryGirl.define do
  factory :question do
    name { Faker::GameOfThrones.character }
    label { Faker::Lorem.paragraph }
    association :questionnaire
  end
end
