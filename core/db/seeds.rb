require 'csv'


tables = ['users']

tables.each do |table|
  ignoreFirstRow = true
  CSV.foreach("./db/seed_data/mock_#{table}.csv") do |row|
    if ignoreFirstRow
      attrs = row
      ignoreFirstRow = false
    else
      h = Hash[attrs.zip row]
      User.new(h).save(:validate => false)
    end
    p h 
  end
end
