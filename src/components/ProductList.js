import React, { useState } from 'react';
import smartphoneImage from './smartphone.jpg'
import laptop from './laptop.jpg'
import tshirt from './tshirt.jpg'
import book from './book.webp'
import cookbook from './cook book.jpg'
import coffeemaker from './Coffee maker.jpg'
import smartwatch from './smartwatch.jpg'
import jeans from './jeans.jpg'

const productsData = [
  {
    title: 'Smartphone',
    category: 'Electronics',
    description: 'A high-end smartphone with the latest features and technology.',
    price: 799.99,
    image: smartphoneImage,
  },
  {
    title: 'Laptop',
    category: 'Electronics',
    description: 'A powerful laptop for work and entertainment, featuring a fast processor and large storage.',
    price: 1299.99,
    image: laptop,
  },
  {
    title: 'T-shirt',
    category: 'Clothing',
    description: 'A comfortable and stylish t-shirt made from soft, breathable fabric.',
    price: 19.99,
    image: tshirt,
  },
  {
    title: 'Novel Book',
    category: 'Books',
    description: 'An exciting novel filled with mystery and adventure, a must-read for book lovers.',
    price: 14.99,
    image: book,
  },
  {
    title: 'Smart Watch',
    category: 'Electronics',
    description: 'A smartwatch with fitness tracking and notification features, compatible with your smartphone.',
    price: 149.99,
    image: smartwatch,
  },
  {
    title: 'Jeans',
    category: 'Clothing',
    description: 'High-quality denim jeans, comfortable and durable for everyday wear.',
    price: 49.99,
    image: jeans,
  },
  {
    title: 'Coffee Maker',
    category: 'Appliances',
    description: 'A coffee maker that brews your favorite coffee in minutes, perfect for home or office.',
    price: 79.99,
    image: coffeemaker,
  },
  {
    title: 'Cookbook',
    category: 'Books',
    description: 'A collection of delicious recipes from various cuisines, ideal for home cooks.',
    price: 29.99,
    image: cookbook,
  },
  // Add more products here
];

function ProductList() {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = sortedProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Product List</h1>
      <label htmlFor="category">Category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        {/* Add more categories here */}
      </select>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortOption} onChange={handleSortChange}>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>

      <div id="product-list">
        {productsToDisplay.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div id="pagination">
        {Array.from({ length: Math.ceil(sortedProducts.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
