class AddNameToClimbInfos < ActiveRecord::Migration[6.1]
  def change
    add_column :climb_infos, :climb_name, :string
  end
end
