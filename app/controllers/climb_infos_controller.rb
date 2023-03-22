class ClimbInfosController < ApplicationController
    
    before_action :find_climb_info, except: [:create, :index]

    def index
        render json: @current_user.climb_infos
    end

    def create
        climb_info = @current_user.climb_infos.create!(climb_info_params)
        render json: climb_info, status: :created
    end

    def show
        render json: @climb_info
    end

    def destroy
        @climb_info.delete
        head :no_content
    end

    def update
        if @climb_info
            @climb_info.update(climb_info_params)
            render json: @climb_info
        else
            render json: { error: "Climb not found"}, status: :not_found
        end
    end

    private 

    def climb_info_params
        params.permit(:info, :user_id, :climb_id)
    end 

    def find_climb_info
        @climb_info = @current_user.climb_infos.find_by(id: params[:id])
    end
end
