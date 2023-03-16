class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :climb_name, :climb_location
  has_many :climb_infos 
end
