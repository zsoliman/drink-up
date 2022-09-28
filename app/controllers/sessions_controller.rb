class SessionsController < ApplicationController
    
    def create
        @user = User.find_by(user_name: params[:user_name]) 
        puts @user.user_name
        if @user&.authenticate(params[:password])
            login!
            render json: {logged_id: true, user: @user }
        else 
            render json: { error: "Invalid username or password"}, status: 401 
        end   
    end

end
