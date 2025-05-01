import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHeart, FaShoppingBasket } from 'react-icons/fa'; 
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    wishlist: [],
    basket: [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.wishlist.find(p => p.id === action.payload.id);
      if (exists) {
        state.wishlist = state.wishlist.filter(p => p.id !== action.payload.id);
        toast.info('Removed from wishlist');
      } else {
        state.wishlist.push(action.payload);
        toast.success('Added to wishlist');
      }
    },
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      toast.success('Added to basket');
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(p => p.id !== action.payload);
      toast.warn('Item removed');
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      toast.error('Wishlist cleared');
    },
  },
});

const { toggleWishlist, addToBasket, removeFromWishlist, clearWishlist } = productSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

const WishlistPage = () => {
  const wishlist = useSelector(state => state.products.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h2>My Wishlist</h2>
        {wishlist.length > 0 && (
          <button className="delete-all-btn" onClick={() => dispatch(clearWishlist())}>
            Delete All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="wishlist-column">
          {wishlist.map(product => (
            <div className="wishlist-item" key={product.id}>
              <div className="item-details">
                <img src={product.image} alt={product.title} />
                <div>
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                </div>
              </div>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeFromWishlist(product.id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Main = () => {
  const [products, setProducts] = useState([]);
  const wishlist = useSelector(state => state.products.wishlist);
  const basket = useSelector(state => state.products.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-right">
          <Link to="/wishlist">
            <FaHeart size={24} color="#fff" /> 
          </Link>
          <Link to="/basket">
            <FaShoppingBasket size={24} color="#fff" /> 
            {basket.length > 0 && <span className="basket-count">{basket.length}</span>}
          </Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="product-list">
              {products.map(product => (
                <div className="product-card" key={product.id}>
                  <button
                    className={`heart ${wishlist.find(p => p.id === product.id) ? 'active' : ''}`}
                    onClick={() => dispatch(toggleWishlist(product))}
                  >
                    <FaHeart />
                  </button>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p className="description">{product.description.slice(0, 100)}...</p>
                  <p className="price">${product.price}</p>
                  <button className="basket-btn" onClick={() => dispatch(addToBasket(product))}>
                    Add to Basket
                  </button>
                </div>
              ))}
            </div>
          }
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/about" element={<div className="page">About Page</div>} />
        <Route path="/contact" element={<div className="page">Contact Page</div>} />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);

export default App;

