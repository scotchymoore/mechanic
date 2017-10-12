class CreateTechnicians < ActiveRecord::Migration[5.1]
  def change
    create_table :technicians do |t|
      t.string :name, :null => false
      t.string :bio, :null => false
      t.string :picture_url, :null => false

      t.timestamps
    end
  end
end
