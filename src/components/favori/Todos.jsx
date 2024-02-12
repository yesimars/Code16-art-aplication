import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../../store/todo/todoSlice"
import { MdDeleteForever } from "react-icons/md";


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            {todos?.map((item, index) =>
                <div className='border p-4 m-2 rounded-lg shadow-lg '>
                        <p key={index}>{item}</p>
                    <div className='ml-60'>
                        <MdDeleteForever
                            size="1.3em"
                            onClick={() => dispatch(removeTodo(index))} />
                    </div>
                </div>
            )}


        </>
    )
}

export default Todos