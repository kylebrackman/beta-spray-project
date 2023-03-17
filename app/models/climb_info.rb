class ClimbInfo < ApplicationRecord
    validates :climb_id, :user_id, :info, presence: true
    belongs_to :user
    belongs_to :climb
end
