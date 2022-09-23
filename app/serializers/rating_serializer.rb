class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rating, :favorite, :comment, :user_image, :user_id

  # belongs_to :recipe  
  # belongs_to :user
end
