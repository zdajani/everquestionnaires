FactoryGirl.define do
  factory :questionnaire do
    title { Faker::LordOfTheRings.character }
    
    factory :questionnaire_with_questions do
      transient do
        questions_count 2
      end

      after(:create) do |questionnaire, evaluator|
        create_list(:question, evaluator.questions_count, questionnaire: questionnaire )
      end
    end
  end
end
