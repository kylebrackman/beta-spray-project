class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    #signup
    def create 
        user = User.create(user_params)
        if user.valid?
            #this is the line of code that logs the user in
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
