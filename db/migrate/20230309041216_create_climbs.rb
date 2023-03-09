class CreateClimbs < ActiveRecord::Migration[6.1]
  def change
    create_table :climbs do |t|
      t.string :climb_name
      t.string :climb_location
      t.integer :climb_rating

      t.timestamps
    end
  end
end
