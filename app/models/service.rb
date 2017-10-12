class Service < ApplicationRecord
  validates :title, :description, :price, :presence => true
end
