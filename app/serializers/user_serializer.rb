class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password_digest, :email, :favorites


  has_many :favorites
  has_many :recipes, through: :favorites


end
