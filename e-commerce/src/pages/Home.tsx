
import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import '../index.css'

 const Home = () => {

    
    interface Product{
       id: number; 
       title: string;
       price: number;
       description: string;
       category:string;
       image:string;
       rating:{
         rate:number;
         count:number;
       }
    }
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
                <h3>{product.price}</h3>
              </Card.Body>
                
            </Card>
            
          ))}
          
     </Container>
    
  )
};
export default Home;


