import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./AddEdit.css";


const initialState = {
  name: "",
  age: "",
  contact:""
};
function AddEdit() {
  const[state, setState] = useState(initialState);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    if(id) {
      getSingleUser(id);
    }
  },[id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`https://crud-app-de.herokuapp.com/user/${id}`);
    if (response.status === 200) {
      setState({...response.data[0]})
    }
  }


    const eventHandler = (e) => {
      setState({...state, [e.target.name]:e.target.value})
    }
  
  console.log(state);

  const postData = async() => {
    if(!id) {
      if (state.name && state.age && state.contact) {
        await axios.post("https://crud-app-de.herokuapp.com/user",state);
        alert("User added successfully!!");
        navigate('/');
        setState(initialState);
      } else {
        alert("Do not left blank input feilds!!")
      }
    } else {
      if (state.name && state.age && state.contact) {
        await axios.put(`https://crud-app-de.herokuapp.com/user/${id}`,state);
        alert("User updated successfully!!");
        navigate('/');
        setState(initialState);
      } else {
        alert("Do not left blank input feilds!!")
      }
    }
  }
  return (
    <div className='add_edit'>
      <div className='input_div'>
          <label htmlFor='username'>Username: </label>
          <input id='username' type="text" name='name' value={state.name} placeholder="Enter name..." onChange={eventHandler}/>
        </div>
        <div className='input_div'> 
          <label htmlFor='age'>Age: </label>
          <input id='age' type="text" name='age' value={state.age} placeholder="Enter age..." onChange={eventHandler}/>
        </div>
        <div className='input_div'>
          <label htmlFor='contact'>Contact: </label>
          <input id='contact' type="text" name='contact' value={state.contact} placeholder="Enter contact no..." onChange={eventHandler}/>
        </div>
        <div className='input_div'>
          <button onClick={postData}>{id ? "Update" : "Add"}</button>
        </div>
    </div>
  )
}

export default AddEdit