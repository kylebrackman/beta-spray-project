class ClimbsController < ApplicationController
    before_action :authorize

    def index 

    end

    def create 

    end

    def show 

    end

    def destroy 

    end

    private 

    def climb_params
        params.permit(:climb_name, :climb_location)
    end

    def authorize 

    end
end
