class UsersController < ApplicationController
skip_before_action :authorize, only: [:create, :show, :show_favorites]

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def show_favorites
        favorites = User.find_by(id: params[:id]).favorites
        render json: favorites

        # User.find_by(id: params[:id]).as_json(methods: [:ratings])
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    end

    private

    def user_params
        params.permit(:user_name, :password, :email)
    end
end
