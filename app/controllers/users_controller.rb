class UsersController < ApplicationController
    def index
        render json: User.all
    end

    #signup
    def create 

    end

    def show
        #get current user
        
    end
end
