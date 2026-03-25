"use client"
import { useState } from 'react';
import { useProducts } from '@/lib/hooks/useProducts';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { products, loading, searchProducts } = useProducts();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim()) {
      const results = searchProducts(term);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const displayProducts = searchTerm ? searchResults : products;

  return (
    <div className="product-search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <p className="search-info">
          {searchTerm 
            ? `Found ${searchResults.length} results for "${searchTerm}"` 
            : `Showing all ${products.length} products`
          }
        </p>
      </div>

      {loading && <p>Loading products...</p>}

      <div className="products-grid">
        {displayProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {product.images.edges.length > 0 && (
              <img 
                src={product.images.edges[0].node.url} 
                alt={product.title}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            )}
            <p className="price">
              {product.priceRange.minVariantPrice.currencyCode} {product.priceRange.minVariantPrice.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
