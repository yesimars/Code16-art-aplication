import React from 'react'
import FavIcon from './FavIcon'
import { Link } from 'react-router-dom'

function Head({value}) {
    return (
        <div className="flex justify-between items-center mb-6 h-12 rounded-lg shadow-md bg-gray-300 ">
            <Link to="/">
            <h1 className='text-2xl font-semibold ml-5 text-purple-800'>ArtisticAura</h1>
            </Link>
            <FavIcon value={value} />
        </div>
    )
}

export default Head