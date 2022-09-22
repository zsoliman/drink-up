class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def favorites 
        user = User.find_by(id: params[:id])
        favorites = 
    end

    def create
        user = User.create(user_name: params[:user_name], password_digest: params[password_digest], email: params[:email])
        render json: user
    end

    # def show_with_favorites
    #     user = User.find_by(id: params[:id])
    #     render json: user, include 
    # end

end
