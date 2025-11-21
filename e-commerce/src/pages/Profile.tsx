import React from 'react'
import  {useProductContext} from '../context/ProductContext';
import type { Product } from '../types/types';

const Profile :React.FC = () => {
   const {products, selectedCategory, dispatch} = useProductContext();
  return (
    <div>
      {products.map((product: Product)=>(
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.image}</p>
        </div>
      ))}

    </div>
  )
}

export default Profile;
