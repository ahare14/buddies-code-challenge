require 'rest-client'
require 'json'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beer.create(name: "Bud Light", image: nil, abv: 4.6, description: "Light Pilsner", food: "Burgers")


def get_beers
    count = 1
    while count < 6
        beer_str = RestClient.get("https://api.punkapi.com/v2/beers?page=#{count}&per_page=80")
        beer_hash = JSON.parse(beer_str)
        beer_hash.each do | beer |
            Beer.create(
                name: beer["name"],
                image: beer["image_url"],
                abv: beer["abv"],
                description: beer["description"],
                food: beer["food_pairing"][0]
            )
        end
        count += 1
    end
end

get_beers()
