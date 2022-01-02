import './App.css';
import CakeContainer from './redux/cakeContainer';
import store from './redux/store';
import {Provider} from 'react-redux'
import IceCreameContainer from './redux/iceCreameContainer';





function App() {
  return (
 <Provider store={store}>
<div className='App'>
<CakeContainer/>
<IceCreameContainer/>
</div>
</Provider>
  );
}

export default App;