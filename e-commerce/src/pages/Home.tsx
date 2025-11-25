
import {  useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import type { Product, Category } from '../types/types';
import  {useProductContext} from '../context/ProductContext';
import {useNavigate} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import {fetchProducts, fetchCategories} from '../api/api'


//import '../index.css'

 const Home:React.FC = () => {

  const navigate = useNavigate();
   const {products, dispatch} = useProductContext();
    //const [products, setProducts]  = useState<Product[]>([]);

    const {data: productsData, isLoading} = useQuery({
      queryKey: ['products'],
      queryFn: fetchProducts,
      
    })
   
    // useEffect(()=>{
    //     const fetchProducts = async () =>{
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         const data =  await response.json();
    //         dispatch({type:'SET_PRODUCT', payload: data});
    //        // setProducts(data)
    //     }
    //     fetchProducts()
    // },[dispatch])

    useEffect(()=> {
      if(productsData)
        dispatch({type:'SET_PRODUCTS', payload: productsData.data});
      },[dispatch, productsData]);

      const {data: categories} = useQuery({
      queryKey: ['categories'],
      queryFn: fetchCategories,
      
    })

           return (
              <>
              <NavBar/>
              <select> 
                <option> All Categories</option>
              {categories?.data.map((category: Category) =>(
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              </select>
              
              <div className="d-flex flex-wrap justify-content-center ">
                  
                    {products.map((product:Product)=>(
                    <ProductCard key= {product.id} product={product}/>
                      
                    ))}
                    
              </div>
              </>
              
              
            )
          };
export default Home;


