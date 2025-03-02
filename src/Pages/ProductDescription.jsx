import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { CartContext } from "../Context/CartProvider/CartProvider";
import { useContext } from 'react';

const ProductDescription = () => {
  const { state, dispatch } = useContext(CartContext)
    const {id} = useParams();
    
    const [product,setProduct] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);


    const getSingleData=async()=>{
      let response=await fetch(`https://dummyjson.com/recipes/${id}`)
      response=await response.json();
      setProduct(response);
      setIngredients(response.ingredients);
      setInstructions(response.instructions);
    }
    useEffect(()=>{
      getSingleData();
    },[id])
  return (
    <div>
      {
        product? 
        <div>
         
         <div>
          <h1  className="text-[40px] underline flex justify-center mt-[40px] text-red-400">{product.name}</h1>
          <div className="flex justify-center mt-7">
          <div>
           <img className="h-84 rounded-2xl  border border-gray-400 shadow-2xl shadow-gray-400" src={product.image} alt=""/>
          </div>
          <div  className="space-y-2 flex flex-col justify-center ml-8">
          <h1 className="text-[20px] font-semibold">{product.name}</h1>
          <p className="text-[20px]">Cuisine: {product.cuisine}</p>
          <p  className="text-[20px] flex gap-2">Rating: {product.rating}<FaStar className="mt-[5px] text-amber-500" /></p>
          <h1 className="text-[20px] text-orange-400 font-bold">Rs. {product.caloriesPerServing} /-</h1>
          <button className="bg-sky-600   p-3 m-2 text-white hover:bg-sky-700 rounded-[6px]">
                                    Buy Now{" "}
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch({ type: "AddToCart", payload: product })
                                    }}

                                    className="  bg-orange-600 p-3  m-2  text-white hover:bg-amber-700 rounded-[6px]">
                                    Add To Cart{" "}
                                </button>
                               </div>
         </div>
        </div>
      
        <div className="flex justify-center gap-52 mt-[60px]"  >
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">Ingredients:</h1>
                            <div>
                                {ingredients.length > 0 && (
                                    <div>
                                        {ingredients.map((item, index) => {
                                            return <div key={index}><li className="text-[20px]">{item}</li></div>;
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">Instructions:</h1>
                            <div>
                                {instructions.length > 0 && (
                                    <div className="w-[600px]">
                                        {instructions.map((item, index) => {
                                            return <div key={index}><li className="text-[20px]">{item}</li></div>;
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
        
        </div>
        : 
        <div>Loading...</div>
      
      }
    </div>
  )
}

export default ProductDescription