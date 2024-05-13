const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const savecartLs = cart =>{
    const cartStringFy = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringFy)
}

const addToLs = id =>{
    const cart = getStoredCart();
    cart.push(id);
    //save to local storage
    savecartLs(cart)
} 

const removedFromls = id =>{
    const cart = getStoredCart();
    //eitah item jodi 3 bar ki 4 bar o thake tiale sob removed hoya jai bo
    const remaining  =cart.filter(idx => idx !== id);
    savecartLs(remaining);
}

export {addToLs, getStoredCart,removedFromls }