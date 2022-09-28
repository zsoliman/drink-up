class UsersController < ApplicationController

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def show_favorites
        favorites = User.find_by(id: params[:id]).favorites
        render json: favorites

        # User.find_by(id: params[:id]).as_json(methods: [:ratings])
    end

    def create
        user = User.create!(user_name: params[:user_name], password_digest: params[:password_digest], email: params[:email])
        if user.valid?
            render json: user
        else 
            render json: {error: 'not valid'}
        end
    end


end
