import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Events = () => {
  const [getData, setGetData] = useState([])
  console.log(getData)
  
  const getelem = async () => {
    const response = await axios.get('/getevent')
    const data = await response.json()
    console.log(response)
    setGetData(data.data);
  }
  
  useEffect(() => {
    getelem()
  }, [])

  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {getData.map((x) => {
        return (
          <div className='col'>
            <div className="card h-100">
              <img src={x.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">{x.start}</p>
                <p className="card-text">{x.end}</p>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Events;