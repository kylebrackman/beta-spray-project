class ClimbInfoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :climb_id, :info

  belongs_to :user
  belongs_to :climb
end
