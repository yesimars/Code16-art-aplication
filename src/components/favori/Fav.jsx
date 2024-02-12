import AddTodo from "./AddTodo";
import Todos from "./Todos";
import CardData from '../card/CardData'

function Fav() {
  return (
    <div className='flex flex-wrap justify-center'>
      {CardData.map((card) => (
        <div className='border p-4 m-2 rounded-lg shadow-lg mb-5'>
          <img className='w-full h-80 object-cover rounded-t-lg' src={card.image} alt="" />
          <div className='p-4'>
            <h2 className='hover:text-red-500 text-xl font-semibold'>{card.name}</h2>
            <p className='hover:text-black text-gray-500 my-2'>{card.title}</p>
            <p className='hover:text-black text-gray-500 my-2'>{card.size}</p>
            <p className='hover:text-black text-gray-500 my-2'>{card.year}</p>
            <p className='hover:text-black text-gray-500 my-2 text-lg'>{card.price}</p>
          </div>
          <AddTodo />
          <Todos />
        </div>
      ))}
    </div>

  )
}

export default Fav