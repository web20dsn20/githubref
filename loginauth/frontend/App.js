import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Protected from './components/Protected';
import EmailForm from './components/Email';
import Pagination from './components/Pagination'
import FormUpload from './components/FormUpload';

function App() {
  return (
   <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/email' element={<EmailForm/>}/>
     <Route path='/pagination' element={<Pagination/>}/>
     <Route path='/upload' element={<FormUpload/>}/>
     <Route element={<Protected/>}>
       <Route path='/home' element={<Home/>}/>
     </Route>
   </Routes>
  );
}

export default App;
