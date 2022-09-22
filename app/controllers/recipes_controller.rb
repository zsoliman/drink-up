class RecipesController < ApplicationController

def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end

    def create
        recipe = Recipe.create(
            strDrink: params[:strDrink],
            strDrinkThumb: params[:strDrinkThumb],
            strIngredient1: params[:strIngredient1],
            strIngredient2: params[:strIngredient2],
            strIngredient3: params[:strIngredient3],
            strIngredient4: params[:strIngredient4],
            strIngredient5: params[:strIngredient5],
            strIngredient6: params[:strIngredient6],
            strIngredient7: params[:strIngredient7],
            strIngredient8: params[:strIngredient8],
            strIngredient9: params[:strIngredient9],
            strIngredient10: params[:strIngredient10],
            strIngredient11: params[:strIngredient11],
            strIngredient12: params[:strIngredient12],
            strIngredient13: params[:strIngredient13],
            strIngredient14: params[:strIngredient14],
            strIngredient15: params[:strIngredient15],
            strMeasure1: params[strMeasure1],
            strMeasure2: params[strMeasure2],
            strMeasure3: params[strMeasure3],
            strMeasure4: params[strMeasure4],
            strMeasure5: params[strMeasure5],
            strMeasure6: params[strMeasure6],
            strMeasure7: params[strMeasure7],
            strMeasure8: params[strMeasure8],
            strMeasure9: params[strMeasure9],
            strMeasure10: params[strMeasure10],
            strMeasure11: params[strMeasure11],
            strMeasure12: params[strMeasure12],
            strMeasure13: params[strMeasure13],
            strMeasure14: params[strMeasure14],
            strMeasure15: params[strMeasure15]
        )
        render json: recipe
    end

end
