class CreateChallenges < ActiveRecord::Migration[5.1]
  def change
    create_table :challenges do |t|
      # has many users
      
      t.timestamps
    end
  end
end
