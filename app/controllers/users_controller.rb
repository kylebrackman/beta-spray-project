class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    render json: User.all
  end

  #signup
  def create
    user = User.create!(user_params)
    #this is the line of code that logs the user in
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
