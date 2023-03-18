class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :climb_infos
  has_many :climb_infos
  has_many :climbs, through: :climb_infos
end
