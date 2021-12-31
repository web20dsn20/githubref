import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks';
import React,{useState,useEffect} from 'react'
import axios from 'axios'



function App() {
  const [getPosts,setGetPosts] = useState({})
  const [posts,setPosts] = useState([
    // {
    //   "id": 1,
    //   "name": "id labore",
    //   "email": "Eliseo@gardner.biz",
    //   "reminder": true
    // },
    // {
    //    "id": 2,
    //   "name": "quo vero",
    //   "email": "Jayne_Kuhic@sydney.com",
    //   "reminder": true
    // },
    // {
    //   "id": 3,
    //   "name": "odio adipisci",
    //   "email": "Nikita@garfield.biz",
    //   "reminder": false
    // }
  ])
  useEffect(()=>{
    getAll();
  },[])
  const getAll = () =>{
    axios.get("http://localhost:5000/person/getAll").then(res=>{
      setPosts(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

    const onDelete = (id) => {
      axios.delete(`http://localhost:5000/person/delete/${id}`).then(res => {
        getAll();
      }).catch(err => {
        console.log(err)
      })
     setPosts(posts.filter(post => post.id !== id))
    }
    const onToggle = (id) => {
     setPosts(posts.map(post => post.id === id ? {...post, reminder:!post.reminder} : post))
    }
    const onAdd = (task) => {
      // var id = Math.floor(Math.random() * 100000) + 1
      // const newTask = {id,...task}
      // setPosts([...posts,newTask])
      axios.post("http://localhost:5000/person/register",task).then(res=> {
       
        getAll();
      }).catch(err => {
        console.log(err)
      })
    }
    const onEdit = (task) => {
      axios.put(`http://localhost:5000/person/edit/${task.id}`,task).then(res=> {
       
        getAll();
      })
     setPosts(posts.map(post => post.id === task.id ? {...post,name:task.name,email:task.email,reminder:task.reminder} : post))
    }


    // const onEdit = async (value) => {
    //   await axios.put(`http://localhost:5000/person/${value.id}`,value).then(res => {
    //     setTasks(value)
    //     getAll();
    //   })
    //   setTasks(tasks.map(task => task.id === value.id ? {...task, name:value.name,email:value.email,reminder:value.reminder} : task ) )
    //       }



    const getTask = (task) => {
      setGetPosts(task)
      
    }
   
  return (
    <div className="container">
      <Header/>
      <AddTasks onAdd={onAdd} onEdit={onEdit} setPost={getPosts}/>
      {posts.length > 0 ? <Tasks tasks={posts} onDelete={onDelete} onToggle={onToggle} getTask={getTask}/> : 'no task to display'}
    </div>
  );
}

export default App;
