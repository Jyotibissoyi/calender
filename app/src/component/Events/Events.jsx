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
  //delete API
  
  const deleteElem = async () => {
    const id = prompt('Enter the ID of the event to be deleted');
    if (!id) {
      return;
    }
    try {
      const response = await axios.put(`http://localhost:3001/delete/${id}`);
      console.log(response.data);
      // Remove the deleted element from the state
      setGetData(getData.filter((elem) => elem.id !== id));
    } catch (err) {
      console.error({msg: err.message });
    }
  };
  

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
                <h5 className='ttt1'>ID : {x._id}</h5>
                <h3 className='ttt2'>date : {x.start.split("T")[0]}</h3>
                <h3 className='ttt2'>start : {x.start.split("T")[1]}</h3>
                <h3 className='ttt3'>end : {x.end.split("T")[1]}</h3>
                <button className="btn btn-primary">Update</button>
                {/* <button className="btn btn-primary">Delete</button> */}
                <button className="btn btn-primary" onClick={() => deleteElem(x.id)}>
                Delete
              </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Events;