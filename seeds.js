class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let names = [
  "Soap",
  "Pizza",
  "Shampoo",
  "Toothpaste",
  "Hamburger",
  "Playstation 5",
  "Xbox Series X",
  "Nintendo Switch",
  "Bread",
  "Computer",
  "Laptop",
  "Lettuce",
  "Tomato",
  "Celery",
  "Donut",
  "Dog Toy",
  "Book"
]

names.forEach(name => {
  let price = Math.floor(Math.random() * 99) + 1
  
  let item = new Item(name, price);

  fetch('http://localhost:3001/items', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
})