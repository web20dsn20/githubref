import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'



const Login = () => {
    const histroy = useNavigate();
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:yup.object({
            email:yup.string().email(),
            password:yup.string()
        }),
        onSubmit:(userValues) => {
            axios.post("http://localhost:5000/person/login",userValues).then(res=>{
                localStorage.setItem("auth",JSON.stringify(res.data))
                histroy('/home')
            })

           
        }
    })
    return (
       <form onSubmit={formik.handleSubmit}>
           
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}

export default Login
