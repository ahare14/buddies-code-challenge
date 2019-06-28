class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :image
      t.float :abv
      t.text :description
      t.text :food

      t.timestamps
    end
  end
end
