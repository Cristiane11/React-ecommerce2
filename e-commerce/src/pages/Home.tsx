
import { useState, useEffect } from 'react';
import { Container, Card,Button } from 'react-bootstrap';
import type { Product } from '../types/types';
import '../index.css'

 const Home = () => {

   
    const [products, setProducts]  = useState<Product[]>([]);
   
    useEffect(()=>{
        const fetchProducts = async () =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data =  await response.json();
            setProducts(data)
        }
        fetchProducts()
    },[])
  return (
     <Container className="mt-5">
          {products.map((product:Product)=>(
            <Card>
              <Card.Img src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> {product.description}</Card.Text>
                <Card.Title>{product.price} </Card.Title>
                <Button variant="primary">Buy Now</Button>
                
              </Card.Body>
                
            </Card>
            
          ))}
          
     </Container>
    
  )
};
export default Home;


