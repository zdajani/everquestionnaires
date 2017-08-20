FactoryGirl.define do
  factory :answer do
    response { Faker::LordOfTheRings.location }
  end
end
