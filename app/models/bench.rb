class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    self.where(
      lat: bounds["southWest"]["lat"].to_i..bounds["northEast"]["lat"].to_i,
      lng: bounds["northEast"]["lng"].to_i..bounds["southWest"]["lng"].to_i
    )
  end
end
