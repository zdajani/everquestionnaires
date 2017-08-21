FactoryGirl.define do
  factory :answer do
    response { Faker::LordOfTheRings.location }
    association :user
  end
end
