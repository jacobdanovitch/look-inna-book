from faker import Faker

### Create x amount of sellers
### Create x amount of books
### Tie randomly between the two (using book_seller_inventory)



import csv
f = open('data/book_sample.csv')
csv_f = csv.reader(f)

for row in csv_f:
  print(f'''insert into book values({row[0]},{row[4]},{row[3]},)''')