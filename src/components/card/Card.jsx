import { MdFavoriteBorder } from "react-icons/md";
import { increment } from "../../store/counter/counterSlice";
import { useDispatch } from "react-redux";

function Card({ card }) {
  
  const dispatch = useDispatch()

  return (
    <>
      <div className='border p-4 m-2 rounded-lg shadow-lg'>
        <img className='w-full h-40 object-cover rounded-t-lg hover:animate-pulse' src={card.image} alt="" />
        <div className='p-1'>
            <p className='hover:text-black text-gray-500 my-2'>{card.title}</p>
            <p className='hover:text-black text-gray-500 my-2'>{card.size}</p>
            <p className='hover:text-black text-gray-500 my-2 text-lg'>{card.price}</p>
            <MdFavoriteBorder className='w-5 h-5 rounded hover:animate-spin' onClick={() => dispatch(increment())}/>
        </div>
      </div>
    </>
  )
}

export default Card