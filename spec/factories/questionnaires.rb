FactoryGirl.define do
  factory :questionnaire do
    title { Faker::LordOfTheRings.character }
    created_at "2017-08-28"
    updated_at "2017-08-28"
    association :user
        
    factory :questionnaire_with_questions do
      transient do
        questions_count 2
      end

      after(:create) do |questionnaire, evaluator|
        create_list(:question, evaluator.questions_count, questionnaire: questionnaire )
      end
    end
    
    factory :questionnaire_with_answers do    
      transient do
        questions_count 2
        users_answers 2
      end
      
      after(:create) do |questionnaire, evaluator|
        users = create_list(:user, evaluator.users_answers)
        questions = create_list(:question, evaluator.questions_count, questionnaire: questionnaire )
        # product returns an array of all combinations of elements from all arrays.
        # https://ruby-doc.org/core-2.2.3/Array.html#method-i-product
        users.product(questions).collect do |user, question|
          create(:answer, created_at: "2017-08-28 18:32:31.828949000 +0000", questionnaire: questionnaire, user: user, question: question)
        end
      end
    end
  end
end
