
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import type { Product } from '../types/types';
import  {useProductContext} from '../context/ProductContext';
//import '../index.css'

 const Home:React.FC = () => {

   const {products, dispatch} = useProductContext();
    //const [products, setProducts]  = useState<Product[]>([]);
   
    useEffect(()=>{
        const fetchProducts = async () =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data =  await response.json();
            dispatch({type:'SET_PRODUCT', payload: data});
           // setProducts(data)
        }
        fetchProducts()
    },[dispatch])
            return (
              <>
              <NavBar/>
              <div className="d-flex flex-wrap justify-content-center ">
                  
                    {products.map((product:Product)=>(
                    <ProductCard key= {product.id} product={product}/>
                      
                    ))}
                    
              </div>
              </>
              
              
            )
          };
export default Home;


