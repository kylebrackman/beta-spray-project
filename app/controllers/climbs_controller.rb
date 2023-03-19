class ClimbsController < ApplicationController
  
  before_action :authorize

  def index
    # add in if/else here, based off of routing?
    # render json: @current_user.climbs
    render json: @current_user.climbs
  end

  def create
    climb = Climb.create!(climb_params)
    render json: climb, status: :created
  end

  private

  def climb_params
    params.permit(:climb_name, :climb_location, :climb_grade)
  end

end
