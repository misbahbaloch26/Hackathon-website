'use client'
import React, { useEffect, useState } from "react";

import Image from "next/image";

import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";




const CartPage = () => {

      const [cartItems , setCartItems] = useState<Product[]>([])
      useEffect(()=>{
        setCartItems(getCartItems())
      },[])
console.log(cartItems)
      const handleRemove = (id: string) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to undo this action!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, remove it!",
        }).then((result) => {
          if (result.isConfirmed) {
            removeFromCart(id);
            setCartItems(getCartItems());
            Swal.fire(
              "Removed!",
              "Item has been removed from your cart.",
              "success"
            );
          }
        })
      }

      const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
      };
    
      const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
          handleQuantityChange(id, product.inventory + 1);
        }
      };
    
      const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1) {
          handleQuantityChange(id, product.inventory - 1);
        }
      };

      const calculateTotal = () => {
        return cartItems.reduce(
          (total, item) => total + item.price * item.inventory,
          0
        );
      }; 
    
      const router = useRouter();
      const handleProceed = () => {
        Swal.fire({
          title: "Processing your order...",
          text: "Please wait a moment.",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Proceed",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Success!",
              "Your order has been successfully processed!",
              "success"
            );
         router.push('/checkout')
            // Clear the cart after proceeding (optional)
            setCartItems([]);
          }
        });
      };

  return (
   
        <div>

          <div className="container mx-auto px-4 md:px-20 py-10">
       
            <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-6" >
              <p>
                <strong>Free Delivery</strong> <br /> Applies to orders of ₹14,000.00 or
                more.
                <a href="#" className="text-black underline">
                  View details
                </a>
              </p>
            </div>
    


    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-8">
                <h2 className="text-2xl font-semibold mb-6">Bag</h2>
                
       {cartItems.map((item)=>(
          
   

         <div key={item._id} className="flex flex-col md:flex-row items-start justify-between border-b border-gray-300 pb-6 mb-6">
                  <div className="flex gap-6">
                    {item.image && (
                    <Image 
                      src={urlFor(item.image).url()} 
                      alt="Nike Dri-FIT ADV TechKnit Ultra"
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
                      width={200}
                      height={200}
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-medium">
                       {item.productName}
                      </h3>

                      <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 mt-4 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                     
                    </div>

                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                    <p className="font-medium text-gray-800">MRP: ₹{item.price}</p>
                    <button className="mt-4 bg-black text-white rounded-md p-2"
                     onClick={() => handleRemove(item._id)}
                     >
                        remove item
                      </button>
                   </div>
                 
          
         
      
          </div>
     ))}
              
     </div>
    
   
               {/*summary-right side */}
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-2xl font-semibold mb-6">Summary</h2>
                <div className="bg-gray-100 p-6 rounded-md">
              
                  <div className="flex justify-between mb-4">
                    <p>Subtotal</p>
                    <p> ${calculateTotal().toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p>Estimated Delivery & Handling</p>
                    <p>Free</p>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4">
                    <p>Total</p>
                   
                    ${calculateTotal().toFixed(2)}
                  </div>
                      
                </div>
              
               <button
            onClick={handleProceed}
            className="rounded-md mt-6 py-3 bg-black p-6 text-white hover:bg-white hover:text-black hover:text-2xl  w-[100%]"
            >
            Member Checkout
           </button>
              </div>
    </div>
    


            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Favourites</h2>
              <p className="text-gray-600">
                There are no items saved to your favourites.
              </p>
            </div>


          </div>
        </div>
      );
    };
    
 

export default CartPage;