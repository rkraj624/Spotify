import React from 'react'

const Song = () => {
  return (
    <div className='container'>
    <div className='d-flex justify-content-between'>
        <h1>Top 10 Songs</h1>
        <button className='btn btn-dark my-2 '>+ Add Song </button>
    </div>
        <table className="table my-2 table-bordered table-responsive">
        <thead>
        <tr className='table-dark'>
            <th scope="col">Artwork</th>
            <th scope="col">Song</th>
            <th scope="col">Date of Release</th>
            <th scope="col">Artists</th>
            <th scope="col">Rate</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
        </tr>
        
        </tbody>
    </table>
  </div>
  )
}

export default Song