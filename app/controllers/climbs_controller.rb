class ClimbsController < ApplicationController
  before_action :authorize

  def index
    # add in if/else here, based off of routing
    render json: Climb.all
    #how to include climb infos? above is not working
  end

  def create
    climb = Climb.create(climb_params)
    if climb.valid?
      render json: climb, status: :created
    else
      render json: { errors: climb.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  def climb_params
    params.permit(:climb_name, :climb_location, :climb_grade)
  end

  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end
end
