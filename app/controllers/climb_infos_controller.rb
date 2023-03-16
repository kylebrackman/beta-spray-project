class ClimbInfosController < ApplicationController

    def index
        render json: ClimbInfo.all
    end

    def create
        
    end
end
