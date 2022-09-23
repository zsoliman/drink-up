class RatingsController < ApplicationController

    def index
        ratings = Rating.all
        render json: ratings
    end

    def show
        rating = Rating.find_by(id: params[:id])
        render json: rating
    end

    def create
        rating = Rating.create(
            rating: params[:rating], 
            favorite: params[:favorite], 
            comment: params[:comment],
            user_image: params[:user_image],
            user_id: params[:user_id],
            recipe_id: params[:recipe_id]
            )
        render json: rating
    end

end
