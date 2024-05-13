import PropTypes from "prop-types";


const Cart = ({ cart,hendelRemoveFromCart }) => {
  // console.log(cart)
  return (
    <div>
      <h1 className="text-3xl mb-6">Cart: {cart.length} </h1>
      <div>
        {cart.map(bottle => (
          <div  className="flex mb-4 border border-purple-600 p-4 w-[250px] "  key={bottle.id}>
            <img  className="w-[100px] " src={bottle.img} />

            <div className="flex items-center">
              <button onClick={() => hendelRemoveFromCart(bottle.id)} className="btn  ml-6 text-white bg-gray-600">Removed</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.PropTypes = {
  cart: PropTypes.array.isRequired,
  hendelRemoveFromCart: PropTypes.func.isRequired
};

export default Cart;
