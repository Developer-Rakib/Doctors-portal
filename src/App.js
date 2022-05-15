import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppoinmenPage from './Pages/Appoinment/AppoinmenPage';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appoinment' element={<AppoinmenPage></AppoinmenPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
