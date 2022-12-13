import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    laptops:[],
    cart:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

        GuardarLista:(state, action)=>{
            state.laptops = action.payload
        },

        addToCart: (state, action)=>{
            let newItem = state.laptops.find(product => product.id === action.payload)
            let iteminCart = state.cart.find(item => item.id === newItem.id)

            return iteminCart?  

            {
                ...state,
                cart: state.cart
            }:
            {
                ...state,
                cart:[...state.cart, {...newItem, quantity:1}],
            }
        },

        addQuantity:(state, action)=>{
   
            return {
                ...state, 
                cart : state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item )}
            
        },

        RemoveOneFromCart: (state, action)=>{

            let itemToDelete = state.cart.find(item => item.id === action.payload)
            
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1}: item)
            } :
            {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        },

        RemoveAllFromCart: (state, action)=>{

            return{                
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        },

        ClearCart: (state, action)=>{
            state.cart = []
        },
    }
})

export const { GuardarLista, addToCart, RemoveOneFromCart, RemoveAllFromCart, ClearCart, addQuantity } = cartSlice.actions
export default cartSlice.reducer