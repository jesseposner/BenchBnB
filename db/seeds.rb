# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  Bench.create(
    description: Faker::Hipster.paragraph,
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude,
    seating: rand(10)
  )
end
