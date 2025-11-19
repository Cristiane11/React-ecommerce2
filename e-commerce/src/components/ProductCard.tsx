import React from 'react'
import { Container,Card,Button,  } from 'react-bootstrap';
import type { Product } from '../types/types';
//import '../index.css'

const ProductCard: React.FC<{product:Product}> = ({product}) => {
     
   
   
  return (
     <Container className="mt-5 ">
           <Card style={{ width: '18rem' }} className="product-card" >
                <Card.Img variant="top" src={product.image}className=" img" />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Title>$ {product.price}</Card.Title>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
                </Card>
          
     </Container>
  )
}

export default ProductCard

