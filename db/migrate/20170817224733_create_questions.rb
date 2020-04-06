class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.references :questionnaire, foreign_key: true
      t.string :name
      t.text :label

      t.timestamps
    end
  end
end
