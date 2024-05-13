
import PropTypes from "prop-types";

const Bottle = ({bottle, hendelCart}) => {

    const {name,price,ratings,img} = bottle

  return (
    <div >
        <div className=' border-[4px] border-purple-500 p-4 hover:bg-gray-300 hover:text-black hover:font-semibold rounded-lg'>
            <h1 className='mb-3 text-2xl'>Name: <span className='text-green-600 font-semibold'>{name}</span> </h1>
            <div className='flex justify-center mb-4'>
            <img className=' w-[400px]' src={img} alt="" />
            </div>
            <div>
            <h1 className='mb-3 text-4xl'>Price:  {price} </h1>
            </div>
            <div className='flex justify-between items-center'>
            <h1 className='text-2xl'>Ratings:  {ratings} </h1>
            <button onClick={() => hendelCart(bottle)} className='btn text-white font-bold mt-4 bg-green-600 border-none w-[200px]'>Purches</button>
            </div>
        </div>
    </div>
  )
}

Bottle.PropTypes ={
  bottle: PropTypes.object.isRequired,
  hendelCart: PropTypes.func.isRequired
}

export default Bottle