class Climb < ApplicationRecord
    validates :climb_name, :climb_location, presence: true

    has_many :climb_infos
    has_many :users, through: :climb_infos
end
