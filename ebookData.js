const EbooksData = JSON.parse(localStorage.getItem("EbooksData")) || [
  {
    name: "Rich Dad Poor Dad",
    status: "published",
    img: "https://images-na.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL210_SR195,210_.jpg",
    price: 7.49,
    sales: 89,
  },
  {
    name: "The Housemaid's Secret",
    status: "draft",
    img: "https://images-na.ssl-images-amazon.com/images/I/71Fh3yg+0WL._AC_UL210_SR195,210_.jpg",
    price: 10.99,
    sales: "-",
  },
  {
    name: "Wool",
    status: "published",
    img: "https://images-na.ssl-images-amazon.com/images/I/81qFq9nLjzL._AC_UL210_SR195,210_.jpg",
    price: 13.59,
    sales: 39,
  },
  {
    name: "The Creative Act",
    status: "draft",
    img: "https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL210_SR195,210_.jpg",
    price: 19.55,
    sales: "-",
  },
  {
    name: "Iron Flame ",
    status: "published",
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL210_SR195,210_.jpg",
    price: 18.53,
    sales: 65,
  },
];
