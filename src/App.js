import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppoinmenPage from './Pages/Appoinment/AppoinmenPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import SignUp from './Pages/SignUp/SignUp';
import { Toaster } from 'react-hot-toast'
import RequirdAuth from './Pages/Shared/RequirdAuth';

function App() {
  return (
    <div >
      <Header />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appoinment' element={
          <RequirdAuth>
            <AppoinmenPage></AppoinmenPage>
          </RequirdAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
