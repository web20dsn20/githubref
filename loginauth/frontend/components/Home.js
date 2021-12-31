import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Home = () => {
    const histroy = useNavigate();
    const [tasks,setTasks] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5000/person/getAll',{headers:{
            "auth":`${JSON.parse(localStorage.getItem("auth"))}`
        }}).then(res => {
            setTasks(res.data)
            console.log(res.data)
        })
    },[])
    return (
      <ul>{
          tasks.map(task => (<li key={task._id}>{task.name}</li>))
          }
          <button onClick={() => {
              localStorage.clear();
              histroy('/login')

          }}>Logout</button>
          </ul>
    )
}

export default Home
