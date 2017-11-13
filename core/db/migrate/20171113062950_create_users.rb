class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      # has many workouts
      # has one challenge
      t.string "first_name", limit: 25
      t.string "last_name", limit: 50
      t.string "email", limit: 100, default: "", null: false
      t.string "username", limit: 25
      t.string "password_digest"
      t.string "picture_url"
      t.timestamps
    end
  end
end
