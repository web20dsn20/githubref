import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'



const Register = () => {
    const histroy = useNavigate();
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
            name:yup.string().strict().trim().min(5,"min five charectors required").required(),
            email:yup.string().email(),
            password:yup.string()
        }),
        onSubmit:(userValues) => {
            axios.post("http://localhost:5000/person/register",userValues)
            histroy('/login')
        }
    })
    return (
       <form onSubmit={formik.handleSubmit}>
           <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name"/>
          {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
          </div>
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

export default Register
