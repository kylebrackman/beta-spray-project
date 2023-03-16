class ClimbInfoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :climb_id, :info, :climb_grade
end
