class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :rating 
      t.boolean :favorite
      t.string :comment
      t.string :user_image
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
