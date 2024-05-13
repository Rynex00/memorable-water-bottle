import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLs, getStoredCart, removedFromls } from "../../Utilitis/localstorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from local Storage
  useEffect(() => {
    // console.log(bottles.length)
    if(bottles.length){
      const storedCart = getStoredCart();
      // console.log(storedCart,bottles);

      const savedCart = [];
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id)
        if(bottle){
          savedCart.push(bottle)
        }
      }
      setCart(savedCart)
      
    }
  }, [bottles]);

  const hendelCart = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart)
    addToLs(bottle.id);
  };

  const hendelRemoveFromCart = id =>{

    //visual cart remove
    const remainigCart = cart.filter(bottle => bottle.id  !== id)
    setCart(remainigCart)

    //remove from localStroge
    removedFromls(id)
  }

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl mb-6">Bottles Aviable: {bottles.length} </h1>
        <div className="flex justify-center items-center">
        <Cart  cart={cart} hendelRemoveFromCart={hendelRemoveFromCart} />
        </div>
        <div className="grid grids-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bottles.map((bottle) => (
            <Bottle key={bottle.id} bottle={bottle} hendelCart={hendelCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottles;
