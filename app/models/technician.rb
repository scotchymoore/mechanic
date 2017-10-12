class Technician < ApplicationRecord
  validates :name, :bio, :picture_url, :presence => true
end
