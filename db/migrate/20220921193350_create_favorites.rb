class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.integer :rating
      t.string :user_images
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
