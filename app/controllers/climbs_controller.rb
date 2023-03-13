class ClimbsController < ApplicationController
    before_action :authorize

    def index
    # add in if/else here, based off of routing 
        climbs = Climb.all
        render json: climbs
    end

    def create 
        climb = current_user.climbs.create(climb_params)
        if command.valid?
            render json: climb, status: :created 
        else
            render json: { errors: climb.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        climb = current_user.climbs.find_by(id: params[:id])
        if climb
            render json: climb
        else
            render json: { errors: "Not found" }, status: :unauthorized
        end  
    end

    private 

    def current_user
        User.find_by(id: session[:user_id])
    end

    def climb_params
        params.permit(:climb_name, :climb_location, :climb_grade)
    end

    def authorize 
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
