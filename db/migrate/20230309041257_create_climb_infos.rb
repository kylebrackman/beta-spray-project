class CreateClimbInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :climb_infos do |t|
      t.integer :user_id
      t.integer :climb_id
      t.string :info

      t.timestamps
    end
  end
end
