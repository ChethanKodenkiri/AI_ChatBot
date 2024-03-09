import './App.css'
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import {Home} from './pages/Home'
import Chat from './pages/Chat';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';


function App() {

  return (
 <main>
  <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/notfound' element={<NotFound />} />
    </Routes>



 </main>
  )
}

export default App


//Time 2:10:30