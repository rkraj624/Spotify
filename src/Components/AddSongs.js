import React from 'react'

const AddSongs = () => {
  return (
    <div className='container'>
        <h1>Add Song</h1>
        <div className='d-flex mt-5'>
            <h6>Song Name</h6>
            <input type="text" className='mx-5 w-50'/>
        </div>
        <div className='d-flex mt-4'>
            <h6>Date Released</h6>
            <input type="text" className='mx-4 w-50'/>
        </div>
        <div className='d-flex mt-4'>
            <h6>Artist</h6>
            <input type="file" className='mx-4 w-50'/>
        </div>
    </div>
  )
}

export default AddSongs