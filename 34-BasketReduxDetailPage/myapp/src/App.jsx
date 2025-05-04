import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = styled.nav`
  background: #1f1f1f;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s;
  }

  a:hover {
    color: #00d8ff;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  text-align: center;
  background-color: white;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

const BasketItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  border-radius: 6px;
  background-color: #fafafa;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Description = styled.div`
  text-align: left;
  font-size: 0.95rem;
  line-height: 1.4;
  max-width: 200px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductImage = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const addToBasket = (product) => {
    const exists = basket.find(item => item.id === product.id);
    if (exists) {
      setBasket(basket.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.title} added to basket`);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.id !== id));
    toast.info('Product removed from basket');
  };

  const clearBasket = () => {
    setBasket([]);
    toast.warn('All items removed from basket');
  };

  const increaseQuantity = (id) => {
    setBasket(basket.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setBasket(basket.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    ));
  };

  return (
    <Router>
      <Navbar>
        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>MyShop</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/basket">Basket ({basket.length})</Link>
        </div>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={
            <CardGrid>
              {products.map(product => (
                <Card key={product.id}>
                  <ProductImage src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                  <Button onClick={() => addToBasket(product)}>Add to Basket</Button>
                </Card>
              ))}
            </CardGrid>
          } />

          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />

          <Route path="/basket" element={
            <>
              {basket.length === 0 ? (
                <h3>Your basket is empty</h3>
              ) : (
                <>
                  {basket.map(item => (
                    <BasketItem key={item.id}>
                      <ProductImage src={item.image} alt={item.title} />
                      <ContentColumn>
                        <Description>
                          <h4>{item.title}</h4>
                          <p>{item.description.split(" ").slice(0, 6).join(" ")}</p> 
                        </Description>
                        <QuantityControls>
                          <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                          <span>{item.quantity}</span>
                          <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                        </QuantityControls>
                        <ActionButtons>
                          <Button onClick={() => removeFromBasket(item.id)} style={{ background: '#dc3545' }}>
                            Delete
                          </Button>
                        </ActionButtons>
                      </ContentColumn>
                    </BasketItem>
                  ))}
                  <Button
                    onClick={clearBasket}
                    style={{ background: 'red', width: '100%', marginTop: '1rem' }}
                  >
                    Delete All
                  </Button>
                </>
              )}
            </>
          } />
        </Routes>
      </Container>

      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;

