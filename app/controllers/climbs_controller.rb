class ClimbsController < ApplicationController
  before_action :authorize

  def index
    if params[:all_climbs]
      climbs = Climb.all
    else
      climbs = @current_user.climbs.uniq { |climb| climb.id }
    end
    render json: climbs
  end

  def create
    climb = Climb.create!(climb_params)
    render json: climb, status: :created
  end

  def show
    climb = Climb.find(params[:id])
    render json: climb
  end

  private

  def climb_params
    params.permit(:climb_name, :climb_location, :climb_grade)
  end
end
