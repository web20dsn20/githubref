import axios from 'axios'
import React,{useState} from 'react'

const FormUpload = () => {
    const [file,setFile] = useState('')
    const [fileName,setFileName] = useState('Choose file')
    const [filenamepath,setFileNamePath] = useState({})

    const fileChange = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("file",file) 
        try{
            const res = await axios.post("http://localhost:5000/person/upload",formData,{
                headers:{"Content-Type":"multipart/form-data"}
            })
            const {fileName,filePath} = res.data;
            setFileNamePath({fileName,filePath})
           
        }catch(err){
            if(err.response.status === 500){
                console.log("error with server")
            }
            else{
                console.log(err.response.data)
            }

        }
    }
    return (
        
        <form onSubmit={onSubmit}>
            <div className="custom-file">
  <input type="file" className="custom-file-input" onChange={fileChange} id="customFile"/>
  <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
  <button type='submit' className="btn btn-primary btn-block">Upload</button>
  {filenamepath ? <div><h1>{filenamepath.fileName}</h1><img src={filenamepath.filePath} alt=""/></div> : ""}
</div>
        </form>
    )
}

export default FormUpload
