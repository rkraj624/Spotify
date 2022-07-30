import React from 'react'

const Artist = () => {
  return (
    <div className='container'>
    <h1>Top 10 Artist</h1>
        <table className="table my-2 table-bordered table-responsive">
        <thead>
        <tr className='table-dark'>
            <th scope="col">Artists</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Songs</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
           
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            
        </tr>
        <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        
        </tbody>
    </table>
</div>
  )
}

export default Artist