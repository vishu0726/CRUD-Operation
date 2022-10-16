import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  const getUsers = async() => {
    const response = await axios.get('https://crud-app-de.herokuapp.com/users');
    console.log(response);
    if (response.data) {
      setData(response.data)
    } else {
      alert("data could not fetch!");
    }
  }

  useEffect(() => {
    getUsers()
  },[]);

    const deleteUser = async (id) => {
      // window.confirm("Are you sure you wanted to delete the current user");
      const response = await axios.delete(`https://crud-app-de.herokuapp.com/user/${id}`);
      if(response.status === 200) {
        // alert("User deleted Successfully!!");
        getUsers();
      }
    }
  return (
    <div className='home' style={{"margin-top":"50px","text-align":"center"}}>
      <table className='style_table'>
        <thead>
          <tr>
            <th style={{"text-align":"center"}}>No.</th>
            <th style={{"text-align":"center"}}>Name</th>
            <th style={{"text-align":"center"}}>Age</th>
            <th style={{"text-align":"center"}}>Contact</th>
            <th style={{"text-align":"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && 
            data.map((item,index) => {
              return (
                <tr key={item.id}>
                  <th scope='row'>{index+1}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.contact}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className='btn btn_edit'>Edit</button>
                    </Link>
                    <Link to={`/`}>
                      <button className='btn btn_delete' onClick={() => deleteUser(item.id)}>Delete</button>
                    </Link>
                    {/* <Link to={`/view/${item.id}`}>
                      <button className='btn btn_view'>View</button>
                    </Link> */}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home