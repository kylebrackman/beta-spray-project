class ClimbInfosController < ApplicationController

    def index
        render json: ClimbInfo.all
    end

    def create
        climb_info = ClimbInfo.create(climb_info_params)
        if climb_info.valid?
            render json: climb_info, status: :created
        else
            render json: { errors: climb_info.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 

    def climb_info_params
        params.permit(:info, :user_id, :climb_id)
    end 
end
