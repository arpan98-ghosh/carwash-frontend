import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myfooter from './components/FooterSction';
import { BrowserRouter, Routes, Route, Redirect} from 'react-router-dom';
import Login from './pages/LoginPage';
import AdminLogin from './pages/AdminLogin';
import HomePage from './pages/HomePage';
import Signup from './pages/SignupPage';
// import AdminDashborad from './pages/AdminDasboard';
import Dashboard from './pages/Dashboard';
import AdminCustomers from './pages/AdminCustomers';
import UserProfile from './pages/UserProfile';
import Myorder from './pages/Myorder';
import AdminWashers from './pages/AdminWashers';
import Orders from './pages/Orders';
import Findwasher from './pages/Findwasher';
import { ReactSession } from 'react-client-session';
import Checkout from './pages/Checkout';
import Washerlogin from './pages/Washerlogin';
import Washerdashborad from './pages/Washerdashboard';
function App() {
  ReactSession.setStoreType("sessionStorage");
    const urole = ReactSession.get("role");
    const uemail = ReactSession.get("myemail");
    //if(uemail){
    //window.location.replace("/login");
    
  return (
    <div className="App">
      <BrowserRouter>
      {/* <CollapsibleNav/> */}
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/admin' element={<AdminLogin/>} />
      <Route path='/admin/dash' element={<Dashboard/>} />
      <Route path='/admin/customers' element={<AdminCustomers/>} />
      <Route path='/admin/washers' element={<AdminWashers/>} />
      <Route path='/admin/orders' element={<Orders/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/profile' element={<UserProfile/>} />
      <Route path='/findwasher' element={<Findwasher/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/orders' element={<Myorder/>} />
      <Route path='/washer' element={<Washerlogin/>} />
      <Route path='/washer/dash' element={<Washerdashborad/>} />
      </Routes>
      </BrowserRouter>     
      <Myfooter/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
   // }
}

export default App;
