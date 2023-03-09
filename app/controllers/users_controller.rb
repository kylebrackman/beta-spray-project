class UsersController < ApplicationController
    def index
        render json: User.all
    end

    #signup
    def create 

    end
end
