class ClimbInfosController < ApplicationController

    def index
        render json: ClimbInfo.all
    end

    def create
        climb_info = ClimbInfo.create!(climb_info_params)
        render json: climb_info, status: :created
    end

    def show
        climb_info = ClimbInfo.find(params[:id])
        render json: climb_info
    end

    def destroy
        climb_info = find_climb_info
        climb_info.delete
        head :no_content
    end

    def update
        
    end

    private 

    def climb_info_params
        params.permit(:info, :user_id, :climb_id)
    end 

    def find_climb_info
        ClimbInfo.find(params[:id])
    end
end
