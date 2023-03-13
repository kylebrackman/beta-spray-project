class RemoveClimbNameFromClimbInfos < ActiveRecord::Migration[6.1]
  def change
    remove_column :climb_infos, :climb_name, :string
  end
end
