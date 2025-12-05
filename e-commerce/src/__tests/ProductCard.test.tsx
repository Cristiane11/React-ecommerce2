import React from 'react';
import { Card, Button } from 'react-bootstrap';
import type { Product } from '../types/types';
import { useAuth } from '../context/AuthContext';
import { useDispatch } from 'react-redux';
import '@testing-library/jest-dom';
import { addToCart } from '../features/cartSlice';
import ProductCard from '../components/ProductCard';
import type { userInfo } from 'node:os';

vi.mock('../lib/firebase/firebase', () => ({
    auth: {}
}));
vi.mock('firebase/auth', () => ({
    signInWithEmailAndPassword: vi.fn()
  }));
interface ProductCardProps {
  product: Product;
  onAuthRequired?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAuthRequired }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleBuyNow = () => {
    if (!user) {
      if (onAuthRequired) onAuthRequired();
      return;
    }
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        count: 1,
      })
    );
  };

  return (
    <div className="col-md-4 col-lg-3 p-2 shadow-sm bg-white">
      <Card className="product-card d-flex flex-column align-items-center p-2 mb-3">
        <Card.Img variant="top" src={product.image} className="w-100" />
        <Card.Body>
          <Card.Title>{product.title.toUpperCase()}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>$ {product.price}</Card.Title>
          <Card.Text>{product.category.toUpperCase()}</Card.Text>
          <span>{product.rating.rate}</span>
          <Button
            id="buyNow"
            variant="primary"
            onClick={handleBuyNow}
            title={!user ? "Log in to buy" : "Add to cart"}
          >
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;

