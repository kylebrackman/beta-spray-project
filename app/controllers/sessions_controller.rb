class SessionsController < ApplicationController
  #login
  def create
    user = User.find_by(username_params)
    if user&.authenticate(password_params)
      session[:user_id] = user.id
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  #logout
  def destroy
    session.delete :user_id
    head :no_content
  end

  private
  
  def username_params
    params.permit(:username)
  end

  def password_params
    params.permit(:password)
  end
end
