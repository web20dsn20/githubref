import React,{useState,useEffect} from 'react'


const AddTasks = ({onAdd,onEdit,setPost}) => {
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [reminder,setReminder] = useState(false)
const [id,setId] = useState('0')
const onSubmit = e => {
e.preventDefault();
if(id === '0') {
    if(!name) {
        alert("pls enter the name")
    }
    onAdd({name,email,reminder})
    
   
}
else{
    onEdit({id,name,email,reminder})
    
}
setId('0')
setName('')
setEmail('')
setReminder(false)
}
useEffect(()=> {
    setId(setPost._id)
    setName(setPost.name)
    setEmail(setPost.email)
    setReminder(setPost.reminder)
    
},[setPost])

    return (
        <form onSubmit={onSubmit} autoComplete='off'>
            <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" value={name} onChange={e=> setName(e.target.value)} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name"/>
         </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
         </div>
        
        <div className="form-group form-check">
          <input type="checkbox" value={reminder} checked={reminder} onChange={e=> setReminder(e.currentTarget.checked)} className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    )
}

export default AddTasks
