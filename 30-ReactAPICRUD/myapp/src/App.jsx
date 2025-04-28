import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { OrbitProgress } from 'react-loading-indicators';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  const [modalProduct, setModalProduct] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const apiUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleCreate = () => {
    if (newProduct) {
      const newItem = { title: newProduct, price: 0 };
      setProducts([...products, newItem]);
      setNewProduct('');
      toast.success('product added!');
    } else {
      toast.error('Enter product name!');
    }
  };

  const handleUpdate = () => {
    if (modalProduct && editIndex !== null) {
      const updated = [...products];
      updated[editIndex].title = modalProduct;
      setProducts(updated);
      setShowModal(false);
      setModalProduct('');
      setEditIndex(null);
      toast.info('product added!');
    }
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    toast.error('product deleted!');
  };

  const handleReset = () => {
    setProducts([]);
    toast.warn('all products deleted!');
  };

  return (
    <div className="app-container">
      {loading ? (
        <div className="loading-spinner">
          <OrbitProgress color="#32cd32" size="medium" text="Loading..." />
        </div>
      ) : (
        <>
          <h2>Todo List of Products</h2>

          <div className="input-container">
            <input
              type="text"
              className="product-input"
              placeholder="Add product"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
            />
            <button className="btn-create" onClick={handleCreate}>Create</button>
          </div>

          <ul className="product-list">
            {products.length > 0 ? (
              products.map((product, index) => (
                <li key={index} className="product-item">
                  <div className="product-info">
                    <span className="product-title">{product.title}</span>
                    <span className="product-price">${product.price?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="button-group">
                    <button
                      className="btn-update"
                      onClick={() => {
                        setModalProduct(product.title);
                        setEditIndex(index);
                        setShowModal(true);
                      }}
                    >
                      Refresh
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>None product</li>
            )}
          </ul>

          <button className="btn-reset" onClick={handleReset}>Delete All</button>

          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h5>Reduct product</h5>
                <input
                  type="text"
                  className="product-input"
                  value={modalProduct}
                  onChange={(e) => setModalProduct(e.target.value)}
                />
                <div className="modal-actions">
                  <button className="btn-close" onClick={() => setShowModal(false)}>Close</button>
                  <button className="btn-update modal" onClick={handleUpdate}>Refresh</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;





















