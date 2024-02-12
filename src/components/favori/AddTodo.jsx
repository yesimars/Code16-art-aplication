import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todo/todoSlice"


function AddTodo() {
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    dispatch(addTodo(inputValue))
    event.target.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className='border p-4 m-2 rounded-lg shadow-lg'>
          <div>
          <textarea
            className='w-full h-20'
            type="text"
            placeholder="Yorum Yap" />
          </div>
          <div >
          <button 
            className='border p-1 rounded-md shadow-lg ml-52'
            type="submit" >Kaydet</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddTodo