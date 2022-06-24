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
import Dashboard from './Pages/Dashboard/Dashboard';
import AppoinmentList from './Pages/Dashboard/AppoinmentList';
import Review from './Pages/Dashboard/Review';
import History from './Pages/Dashboard/History';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

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
        <Route path='/dashboard' element={
          <RequirdAuth>
            <Dashboard></Dashboard>
          </RequirdAuth>
        }>
          <Route index element={<AppoinmentList></AppoinmentList>}></Route>
          <Route path='myReview' element={<Review></Review>}></Route>
          <Route path='myHistory' element={<History></History>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allUsers' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='addDoctors' element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctors' element={
            <RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
