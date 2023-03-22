class ClimbInfo < ApplicationRecord
    validates :info, presence: true
    belongs_to :user
    belongs_to :climb
end
