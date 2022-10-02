class FavoritesController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        favorite = Favorite.create!(fav_params)
        render json: favorite
    end

    private

    def fav_params
        params.permit(:user_id, :recipe_id)
    end
end
