import React from 'react'
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';

function FavIcon({ value }) {
  return (
    <>
      <div className='relative mr-7'>
        <Link to="/fav">
          <MdFavorite className='text-xl' />
          {value > 0 && (
            <span className='bg-purple-500 text-white w-4 h-4 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs'>
              {value}
            </span>
          )}
        </Link>
      </div>
    </>
  )
}

export default FavIcon