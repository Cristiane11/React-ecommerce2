
import {  useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Product, Category } from '../types/types';
import  {useProductContext} from '../context/ProductContext';

import { useQuery } from '@tanstack/react-query';
import {fetchProducts, fetchCategories} from '../api/api'


 const Home:React.FC = () => {


   const {products,selectedCategory, dispatch} = useProductContext();
   

    const {data: productsData} = useQuery({
      queryKey: ['products'],
      queryFn: fetchProducts,
      
    })
   
  
    useEffect(()=> {
      if(productsData)
        dispatch({type:'SET_PRODUCTS', payload: productsData.data});
      },[dispatch, productsData]);

      const {data: categories} = useQuery({
      queryKey: ['categories'],
      queryFn: fetchCategories,
      
    })
    const getFilteredProducts = () => {
      if (selectedCategory){
        return products.filter((product:  Product) => product.category === selectedCategory
      );
      }
      return products;
    };
    const filteredProducts = getFilteredProducts();

           return (
              <>
              
              <select onChange={(e)=> dispatch({type:"SET_SELECTED_CATEGORY", payload:e.target.value})}
                value={selectedCategory}> 
                <option value=''> All Categories</option>
              {categories?.data.map((category: Category) =>(
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              </select>
              
              <div className="d-flex flex-wrap justify-content-center ">
                  
                    {filteredProducts.map((product:Product)=>(
                    <ProductCard key= {product.id} product={product}/>
                      
                    ))}
                    
              </div>
              </>
              
              
            )
          };
export default Home;


