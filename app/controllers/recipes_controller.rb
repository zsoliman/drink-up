class RecipesController < ApplicationController
skip_before_action :authorize, only: [:index, :show, :create]

def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end

    def create
        recipe = Recipe.find_by(strDrink: params[:strDrink])
        if recipe
            render json: recipe, status: :ok
        else        
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
        end

    end

    private

    def recipe_params
        params.permit(
            
            :strDrink,
            :strDrinkThumb,
            :strIngredient1,
            :strIngredient2,
            :strIngredient3,
            :strIngredient4,
            :strIngredient5,
            :strIngredient6,
            :strIngredient7,
            :strIngredient8,
            :strIngredient9,
            :strIngredient10,
            :strIngredient11,
            :strIngredient12,
            :strIngredient13,
            :strIngredient14,
            :strIngredient15,
            :strMeasure1,
            :strMeasure2,
            :strMeasure3,
            :strMeasure4,
            :strMeasure5,
            :strMeasure6,
            :strMeasure7,
            :strMeasure8,
            :strMeasure9,
            :strMeasure10,
            :strMeasure11,
            :strMeasure12,
            :strMeasure13,
            :strMeasure14,
            :strMeasure15
        )
    end

end
