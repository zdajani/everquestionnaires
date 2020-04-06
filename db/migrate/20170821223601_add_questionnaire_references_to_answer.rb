class AddQuestionnaireReferencesToAnswer < ActiveRecord::Migration[5.1]
  def change
    add_reference :answers, :questionnaire, foreign_key: true
  end
end
