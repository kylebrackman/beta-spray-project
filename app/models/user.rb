class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    has_many :climb_infos
    has_many :climbs, through: :climb_infos
end
