FactoryGirl.define do
  factory :questionnaire do
    title { Faker::LordOfTheRings.character }
    
    factory :questionnaire_with_questions do
     # languages_count is declared as an ignored attribute and available in
     # attributes on the factory, as well as the callback via the evaluator
      transient do
        questions_count 2
      end

     # the after(:create) yields two values; the profile instance itself and
     # the evaluator, which stores all values from the factory, including
     # ignored attributes; `create_list`'s second argument is the number of
     # records to create and we make sure the profile is associated properly
     # to the language
      after(:create) do |questionnaire, evaluator|
        create_list(:question, evaluator.questions_count, questionnaire: questionnaire )
      end
    end
  end
end
