class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :abv, :description, :food
end
