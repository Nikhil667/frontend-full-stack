import { createContext, useState } from "react";
import { getProductData } from "../data/products";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({children}){

    const [cartProducts, setCartProducts] = useState([]);

    // [ { id: 1, quantity: 2} ]

    function getProductQuantity(id){
        const quantity = cartProducts.find(item => item.id === id)?.quantity

        if(quantity === undefined){
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id){

        // [ { id: 1, quantity: 2}, { id: 2, quantity: 0} ]
        const quantity = getProductQuantity(id);

        if(quantity === 0){ //product not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else{ //product in cart
            setCartProducts(
                // .map creates new array with each item traversing
                cartProducts.map(
                    item =>
                    item.id === id                                     // if condition
                    ? {...item, quantity: item.quantity + 1 } // if condition true
                    : item                                              // if condition false
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteFromCart(id)
        } else{
            setCartProducts(
                cartProducts.map(
                    item =>
                    item.id === id                                      // if condition
                    ? {...item, quantity: item.quantity - 1 }  // if condition true
                    : item                                              // if condition false
                )
            )
        }
    }

    function deleteFromCart(id){
        // starts wit empty array. If an object meets the condition, add the object into array
        // [product1, product2, product3] // remove product with id - 2
        // it checks whether the current product has id 2, if not add to new array else leave it
        // [product1, product3]
        
        setCartProducts(
            cartProducts => 
            cartProducts.filter(currentItem => {
                return currentItem.id !== id // 2 != 2, this condition is false
            }) 
        )
    }

    function getTotalCost(){
        let totalCost = 0;

        // eslint-disable-next-line array-callback-return
        cartProducts.map((item) => {
            const productData = getProductData(item.id);
            totalCost +=( productData.price * item.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;

// Context (cart, addToCart, remove)
// Provider -> gives your react app access to all things in your cart