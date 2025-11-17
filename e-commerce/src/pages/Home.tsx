import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

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
    const [prodcts, setProducts] = useState<Product[]>([]);
   
    useEffect(()=>{
        const fetchProducts = async () =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data =  await response.json();
        }
        fetchProducts()
    },[])
  return (
     <Container className="mt-5">
        Home
     </Container>
    
  )
}

export default Home
