class User < ApplicationRecord
    has_secure_password

    has_many :ratings
    has_many :favorites
    has_many :recipes, through: :ratings

    # validates :user_name, presence: true  
    # validates :user_name, uniqueness: {case_sensitive: false}

    # validates :password_digest, presence: true
    # validates :password_digest, length: {minimum: 4}

    # validates :email, presence: true
    # validates :email, uniqueness: {case_sensitive: false}

end
