import React from 'react';
import type {Product} from '../types/types';
import { createContext, useContext, type ReactNode, useReducer } from 'react';


// Define Action types
type ProductAction ={
    type: 'SET_PRODUCT'; payload: Product[]}
    | {type:'SET_SELECTED_CATEGORY'; payload: string};


interface ProductState {
    products: Product[];
    selectedCategory: string;
}

 // Initial State
 const initialState: ProductState = {
    products:[],
    selectedCategory:'',
 }
 //Reducer function listens for actions and changes the state based on the action type and returns the updated state
 const productReducer =(
    state: ProductState,
    action: ProductAction
 ): ProductState => {
    switch(action.type){
        case'SET_PRODUCT':
            return{...state, products: action.payload };
        case 'SET_SELECTED_CATEGORY':
            return{...state, selectedCategory: action.payload};
        default:
            throw new Error(`Unhandled action type: $ {action.type}`);
    }
};
//Create Interface for context
// interface ProductContextType {
//     products: Product[];
//     selectedCategory: string;
//     //Dispatch function allows us to trigger actions to update the state
//     dispatch: React.Dispatch<ProductAction>;
// } 
//I can do this instead
interface ProductContextType extends ProductState {
    dispatch: React.Dispatch<ProductAction>;
}


//Create context
const ProductContext = createContext<ProductContextType |undefined>(undefined)

//Provider component
interface ProductProviderProps{
    children: ReactNode;
}
//Wraps the app and provides the context value to all child components
export const ProductProvider: React.FC<ProductProviderProps> = ({
    children,

}) => {
    const[state, dispatch] = useReducer(productReducer, initialState);
    return(
        <ProductContext.Provider value={{...state, dispatch}}>
            {children}
        </ProductContext.Provider>
    );
};
//Custom Hook for accessing the contex
export const useProductContext = () : ProductContextType => {
    const context = useContext(ProductContext);
    if (! context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
}