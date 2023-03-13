class AddClimbGradeToClimbInfos < ActiveRecord::Migration[6.1]
  def change
    add_column :climb_infos, :climb_grade, :string
  end
end
