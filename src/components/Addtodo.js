import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo,deleteTodo,removeTodo} from "../Actions/Index"
import "./Todo.css"
const Addtodo = () => {
  const [inputdata, setInputData]= useState('');
  const dispatch = useDispatch();
  return (
    <>
    <div className='main-div'>
         <div className="child-div">
             <figure>
                <img className='im' src='./images/icon.jpg' alt='todo'/>
                <figcaption className='discription'>Add Your List Here</figcaption>
            </figure>

            <div className='additem'>
            <input className='form-control'type="text" placeholder="✍ Add Item"
              value={inputdata}
               onChange={(e)=> setInputData(e.target.value)}/>
               <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputdata))} ></i>
            </div>

        </div>
    </div>
    </>
  )
}

export default Addtodo
