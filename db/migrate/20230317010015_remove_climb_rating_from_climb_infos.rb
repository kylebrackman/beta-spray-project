class RemoveClimbRatingFromClimbInfos < ActiveRecord::Migration[6.1]
  def change
    remove_column :climb_infos, :climb_rating, :integer
  end
end
