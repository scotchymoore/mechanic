class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :title, null => false
      t.string :desription null => false
      t.string :price null => false

      t.timestamps
    end
  end
end
