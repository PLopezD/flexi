class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      # belongs to user
      # picture
      t.string "picture_url"
      t.references :user
      t.timestamps
    end
  end
end
