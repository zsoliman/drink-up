# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require ‘rest-client’

# def xrapid_api_key
#     ENV["X-RapidAPI-Key"]
# end

# def seed_drink_recipes
#     api_data = {key: xrapid_api_key}
#     drinks = RestClient.get("the-cocktail-db.p.rapidapi.com")
#     drinks_array = JSON.parse(drinks)["recipes"]
#     drinks_array.each do |s|
#         Recipe.create(
#             strDrink: params[:strDrink],
#             strDrinkThumb: params[:strDrinkThumb],
#             strIngredient1: params[:strIngredient1],
#             strIngredient2: params[:strIngredient2],
#             strIngredient3: params[:strIngredient3],
#             strIngredient4: params[:strIngredient4],
#             strIngredient5: params[:strIngredient5],
#             strIngredient6: params[:strIngredient6],
#             strIngredient7: params[:strIngredient7],
#             strIngredient8: params[:strIngredient8],
#             strIngredient9: params[:strIngredient9],
#             strIngredient10: params[:strIngredient10],
#             strIngredient11: params[:strIngredient11],
#             strIngredient12: params[:strIngredient12],
#             strIngredient13: params[:strIngredient13],
#             strIngredient14: params[:strIngredient14],
#             strIngredient15: params[:strIngredient15],
#             strMeasure1: params[strMeasure1],
#             strMeasure2: params[strMeasure2],
#             strMeasure3: params[strMeasure3],
#             strMeasure4: params[strMeasure4],
#             strMeasure5: params[strMeasure5],
#             strMeasure6: params[strMeasure6],
#             strMeasure7: params[strMeasure7],
#             strMeasure8: params[strMeasure8],
#             strMeasure9: params[strMeasure9],
#             strMeasure10: params[strMeasure10],
#             strMeasure11: params[strMeasure11],
#             strMeasure12: params[strMeasure12],
#             strMeasure13: params[strMeasure13],
#             strMeasure14: params[strMeasure14],
#             strMeasure15: params[strMeasure15]
#         )
#     end
# end

User.destroy_all
Recipe.destroy_all
Rating.destroy_all

puts 'seeding...'

user1 = User.create(user_name: "Zachary",
    password: "password",
    email: "email@gmail.com")

recipe1= Recipe.create(strDrink: "New Drink",
    strIngredient1: "Liquid",
    strDrinkThumb: "https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRyaW5rfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    strMeasure1: "A Lot")

recipe2= Recipe.create(strDrink: "New Drink",
    strIngredient1: "Liquid",
    strMeasure1: "A Lot")


rating1 = Rating.create(rating: 4, favorite: true, comment: 'good', user_id: user1.id, recipe_id: recipe1.id)

favorite1 = Favorite.create(user_id: 1, recipe_id: 1)
favorite2 = Favorite.create(user_id: 1, recipe_id: 2)

puts 'done seeding'