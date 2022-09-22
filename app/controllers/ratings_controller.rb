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
        rating = Rating.create(rating: params[:rating], favorite: params[:favorite], )
    end

end
