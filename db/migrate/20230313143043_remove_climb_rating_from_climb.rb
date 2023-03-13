class RemoveClimbRatingFromClimb < ActiveRecord::Migration[6.1]
  def change
    remove_column :climbs, :climb_rating, :integer
  end
end
