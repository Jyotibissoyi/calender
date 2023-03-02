import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Events.css'

const Events = () => {
  const [getData, setGetData] = useState([])
  console.log(getData)

  const getelem = async () => {
    const response = await axios.get('http://localhost:3001/getevent')
    // const data = await response.json()
    console.log(response.data.data)
    setGetData(response.data.data);
  }

  useEffect(() => {
    getelem()
  }, [])

  return (
    <div className="container1">
      {
        getData.map((x) => {
          return (
            <div >
              <div className='description'>
                <h1 className='ttt1'>Title : {x.title}</h1>
                <h3 className='ttt2'>date : {x.start.split("T")[0]}</h3>
                <h3 className='ttt2'>start : {x.start.split("T")[1]}</h3>
                <h3 className='ttt3'>end : {x.end.split("T")[1]}</h3>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Events;