import React, { useState } from 'react';
import './Productgrid.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Running Sneakers',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    category: 'Footwear',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Leather Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    category: 'Accessories',
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    category: 'Electronics',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
    category: 'Accessories',
    rating: 4.2,
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1601925228565-60c6413af4b0?w=400&q=80',
    category: 'Sports',
    rating: 4.4,
  },
  {
    id: 8,
    name: 'Ceramic Coffee Mug',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80',
    category: 'Kitchen',
    rating: 4.1,
  },
];

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="stars">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
};

const ProductGrid = () => {
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState({});
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1200);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="pg-wrapper">
      {/* Header */}
      <header className="pg-header">
        <div className="pg-header-inner">
          <div>
            <h1 className="pg-title">Product Store</h1>
            <p className="pg-subtitle">Discover our curated collection</p>
          </div>
          <button className="pg-cart-btn" onClick={() => setShowCart(true)}>
            <span className="pg-cart-icon">🛒</span>
            <span className="pg-cart-label">Cart</span>
            {totalItems > 0 && <span className="pg-cart-badge">{totalItems}</span>}
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <main className="pg-main">
        <div className="pg-grid">
          {products.map((product) => (
            <div key={product.id} className="pg-card">
              <div className="pg-img-wrap">
                <img src={product.image} alt={product.name} className="pg-img" />
                <span className="pg-category">{product.category}</span>
              </div>
              <div className="pg-card-body">
                <h3 className="pg-name">{product.name}</h3>
                <div className="pg-rating">
                  {renderStars(product.rating)}
                  <span className="pg-rating-num">{product.rating}</span>
                </div>
                <div className="pg-footer">
                  <span className="pg-price">${product.price.toFixed(2)}</span>
                  <button
                    className={`pg-add-btn ${added[product.id] ? 'pg-add-btn--added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {added[product.id] ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Modal */}
      {showCart && (
        <div className="pg-modal-overlay" onClick={() => setShowCart(false)}>
          <div className="pg-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pg-modal-header">
              <h2 className="pg-modal-title">Your Cart</h2>
              <button className="pg-modal-close" onClick={() => setShowCart(false)}>✕</button>
            </div>
            {cart.length === 0 ? (
              <p className="pg-cart-empty">Your cart is empty.</p>
            ) : (
              <>
                <ul className="pg-cart-list">
                  {cart.map((item) => (
                    <li key={item.id} className="pg-cart-item">
                      <img src={item.image} alt={item.name} className="pg-cart-img" />
                      <div className="pg-cart-info">
                        <span className="pg-cart-name">{item.name}</span>
                        <span className="pg-cart-qty">x{item.qty}</span>
                      </div>
                      <span className="pg-cart-price">${(item.price * item.qty).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="pg-cart-total">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
