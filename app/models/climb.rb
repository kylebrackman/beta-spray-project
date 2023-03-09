class Climb < ApplicationRecord
    has_many :climb_infos
    has_many :users, through: :climb_infos
end
