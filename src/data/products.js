const productsArray = [
    {
      "id": 1,
      "name": "Apple iPhone 13 Pro Max",
      "description": "The iPhone 13 Pro Max has a 6.7-inch Super Retina XDR display, A15 Bionic chip, 5G-capable, Pro camera system, and more.",
      "price": 1099.00,
      "imgUrl": "/imgs/book.jpg",
      "category": "Electronics",
      "brand": "Apple",
      "rating": 4.8,
      "reviews": 163,
      "in_stock": false
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21 Ultra 5G",
      "description": "The Samsung Galaxy S21 Ultra 5G has a 6.8-inch Dynamic AMOLED 2X display, Exynos 2100/Snapdragon 888 chip, 5G-capable, Quad camera system, and more.",
      "price": 1199.99,
      "imgUrl": "/imgs/book.jpg",
      "category": "Electronics",
      "brand": "Samsung",
      "rating": 4.7,
      "reviews": 245,
      "in_stock": true
    },
    {
      "id": 3,
      "name": "Sony PlayStation 5",
      "description": "The Sony PlayStation 5 has an AMD Zen 2-based CPU, AMD RDNA 2-based GPU, 16GB of GDDR6 memory, and a custom SSD for faster load times.",
      "price": 499.99,
      "imgUrl": "/imgs/book.jpg",
      "category": "Video Games",
      "brand": "Sony",
      "rating": 4.9,
      "reviews": 198,
      "in_stock": true
    },
    {
      "id": 4,
      "name": "Nintendo Switch",
      "description": "The Nintendo Switch is a hybrid console that can be used as a home console and a portable console. It has a 6.2-inch touch screen, detachable Joy-Con controllers, and more.",
      "price": 299.99,
      "imgUrl": "/imgs/book.jpg",
      "category": "Video Games",
      "brand": "Nintendo",
      "rating": 4.6,
      "reviews": 341,
      "in_stock": true
    },
    {
      "id": 5,
      "name": "Bose QuietComfort 35 II Wireless Headphones",
      "description": "The Bose QuietComfort 35 II Wireless Headphones have a noise-rejecting dual-microphone system, Alexa and Google Assistant integration, and up to 20 hours of battery life.",
      "price": 299.00,
      "imgUrl": "/imgs/book.jpg",
      "category": "Electronics",
      "brand": "Bose",
      "rating": 4.8,
      "reviews": 111,
      "in_stock": true
    }
];

function getProductData(givenId){
  const productData = productsArray.find(item => item.id === givenId)

  if(productData === undefined){
    console.log("Product not found");
    return undefined
  }

  return productData

}

export { productsArray, getProductData }