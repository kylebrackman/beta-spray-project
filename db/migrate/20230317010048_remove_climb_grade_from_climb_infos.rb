class RemoveClimbGradeFromClimbInfos < ActiveRecord::Migration[6.1]
  def change
    remove_column :climb_infos, :climb_grade, :string
  end
end
