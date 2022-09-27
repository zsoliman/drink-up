# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_27_190303) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "rating"
    t.boolean "favorite"
    t.string "comment"
    t.string "user_image"
    t.integer "user_id"
    t.integer "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "strDrink"
    t.string "strDrinkThumb"
    t.string "strIngredient1"
    t.string "strIngredient2"
    t.string "strIngredient3"
    t.string "strIngredient4"
    t.string "strIngredient5"
    t.string "strIngredient6"
    t.string "strIngredient7"
    t.string "strIngredient8"
    t.string "strIngredient9"
    t.string "strIngredient10"
    t.string "strIngredient11"
    t.string "strIngredient12"
    t.string "strIngredient13"
    t.string "strIngredient14"
    t.string "strIngredient15"
    t.string "strMeasure1"
    t.string "strMeasure2"
    t.string "strMeasure3"
    t.string "strMeasure4"
    t.string "strMeasure5"
    t.string "strMeasure6"
    t.string "strMeasure7"
    t.string "strMeasure8"
    t.string "strMeasure9"
    t.string "strMeasure10"
    t.string "strMeasure11"
    t.string "strMeasure12"
    t.string "strMeasure13"
    t.string "strMeasure14"
    t.string "strMeasure15"
    t.string "strInstructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
