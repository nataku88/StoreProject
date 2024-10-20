import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { NavBar } from './NavBars/NavBar';
import { About } from './Pages/About';
import { Login } from './Modals/Login';
import { Account } from './Secure_Components/Account';
import { Protected } from './Secure_Components/Protected';
import { NavBarSec } from './NavBars/NavBarSec';
import { Transformers } from './Product_Pages/TransFormers';
import { ThunderCats } from './Product_Pages/ThunderCats';
import { Godzilla } from './Product_Pages/Godzilla';
import { Masters } from './Product_Pages/Masters';
import { WWE } from './Product_Pages/WWE';
import { SheRa } from './Product_Pages/SheRa';
import { GiJoe } from './Product_Pages/GiJoe';
import { Cart } from './Pages/Cart';
import { CreateAccount } from './Pages/CreateAccount';
import './App.css';
import { createContext, useState } from 'react';

export const LoginContext = createContext();

function App() {
  const[loggedin, setLoggedIn] = useState(false)
  const[user,setUser] = useState("");
  const[userid, setUserId] = useState("")
  return (
    <div>
      <LoginContext.Provider value={[loggedin,setLoggedIn,user,setUser,userid,setUserId]}>
       
      <BrowserRouter>
      
        {loggedin ? <NavBarSec/>: <NavBar/>}
       
        <Routes>
          <Route path='/Account' element={
              <Protected loggedin={loggedin}>
                <Account/>
              </Protected>
            }/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Login' element={<Login/>}/>   
          <Route path='/Create' element={<CreateAccount/>}/>
          <Route path='/Transformers' element={<Transformers/>}/>
          <Route path='/Thundercats' element={<ThunderCats/>}/>
          <Route path='/Masters' element={<Masters/>}/>
          <Route path='/SheRa' element={<SheRa/>}/>
          <Route path='/GiJoe' element={<GiJoe/>}/>
          <Route path='/Godzilla' element={<Godzilla/>}/>
          <Route path='/WWE' element={<WWE/>}/>
          
        </Routes>
     
      </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
