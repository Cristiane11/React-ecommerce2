import React from 'react'
import { Container,Card,Button,  } from 'react-bootstrap';
import type { Product } from '../types/types';
//import '../index.css'

const ProductCard: React.FC<{product:Product}> = ({product}) => {
     
   
   
  return (
     <Container className="col-md-4 col-lg-3 p-2 shadow-sm  bg-white">
           <Card className="product-card  d-flex flex-column align-items-center p-2 mb-3" >
                <Card.Img variant="top" src={product.image}className="w-100" />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Title>$ {product.price}</Card.Title>
                     <Card.Text> {product.category}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
                </Card>
          
     </Container>
  )
}

export default ProductCard

