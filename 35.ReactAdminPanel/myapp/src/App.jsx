// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/basket">Basket</Link>
  </nav>
);

const Home = ({ addToBasket }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="cards">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => {
            addToBasket(product);
            toast.success("Added to basket!");
          }}>Add to Basket</button>
        </div>
      ))}
    </div>
  );
};

const Basket = ({ basket, removeItem, clearBasket, goToAdmin }) => (
  <div className="basket">
    {basket.map((item, idx) => (
      <div key={idx} className="basket-item">
        <img src={item.image} alt="product" />
        <p>{item.description.split(' ').slice(0, 8).join(' ')}</p>
        <h4>${item.price}</h4>
        <button onClick={() => {
          removeItem(idx);
          toast.info("Item removed!");
        }}>Delete</button>
      </div>
    ))}
    {basket.length > 0 && (
      <>
        <button onClick={() => {
          clearBasket();
          toast.warn("All items deleted!");
        }}>Delete All</button>
        <button onClick={goToAdmin}>Admin Panel</button>
      </>
    )}
  </div>
);

const AdminPanel = ({ addCustomProduct }) => {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!image || !description || !price) {
      toast.error("All fields required!");
      return;
    }

    const newProduct = { image, description, price };
    addCustomProduct(newProduct);
    toast.success("Custom product added!");
    setImage('');
    setDescription('');
    setPrice('');
  };

  return (
    <div className="admin">
      <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

const About = () => <h2 style={{ textAlign: 'center' }}>About Page</h2>;
const Contact = () => <h2 style={{ textAlign: 'center' }}>Contact Page</h2>;

function App() {
  const [basket, setBasket] = useState([]);
  const [adminVisible, setAdminVisible] = useState(false);

  const addToBasket = (product) => setBasket(prev => [...prev, product]);
  const removeItem = (idx) => setBasket(prev => prev.filter((_, i) => i !== idx));
  const clearBasket = () => setBasket([]);
  const addCustomProduct = (product) => setBasket(prev => [...prev, product]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToBasket={addToBasket} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={
          <>
            <Basket
              basket={basket}
              removeItem={removeItem}
              clearBasket={clearBasket}
              goToAdmin={() => setAdminVisible(true)}
            />
            {adminVisible && <AdminPanel addCustomProduct={addCustomProduct} />}
          </>
        } />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;


