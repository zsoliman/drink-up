class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password_digest,:email


  has_many :ratings
  has_many :recipes, through: :ratings


end
