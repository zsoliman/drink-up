class Recipe < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites

    # validates :recipe_id, uniqueness: true
end

