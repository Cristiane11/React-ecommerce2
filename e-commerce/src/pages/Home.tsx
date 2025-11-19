
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import type { Product } from '../types/types';
//import '../index.css'

 const Home:React.FC = () => {

   
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
              <>
              <NavBar/>
              <div className="d-flex flex-wrap justify-content-center">
                  
                    {products.map((product:Product)=>(
                    <ProductCard product={product}/>
                      
                    ))}
                    
              </div>
              </>
              
              
            )
          };
export default Home;


