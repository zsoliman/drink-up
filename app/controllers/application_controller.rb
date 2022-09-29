class ApplicationController < ActionController::API
    # skip_before_action :verify_authenticity_token
    include ActionController::Cookies
    before_action :authorize

    def current_user
        @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
    end
    
    
    # def login!
    #     session[user_id: @user.id]
    # end

    # def logout!
    #     session.clear
    # end

    private

    def authorize
        render json: {errors: {User: "Not Authorized"}}, status: :unauthorized unless current_user
    end

    def record_not_found(error)
        render json: {error: "#{error.model} not found"} , status: 404
    end 

    def record_invalid(error)
        render json: {errors: error.record.errors.full_messages}, status: 422
    end

end
