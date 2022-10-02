class FavoritesController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :destroy]

    def index
        favorite = Favorite.all
        render json: favorite
    end

    def create     
        favorite = Favorite.create!(fav_params)
        render json: favorite
    end

    def destroy
        favorite = Favorite.find_by(user_id: params[:user_id], recipe_id: params[:recipe_id])
        favorite.destroy
    end

    private

    def fav_params
        params.permit(:user_id, :recipe_id)
    end
end
