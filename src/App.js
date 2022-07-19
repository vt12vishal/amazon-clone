import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";



function App() {

 
  const [{user}, dispatch] =useStateValue();

  useEffect(()=>{

   const unsubscribe= auth.onAuthStateChanged((authUser) =>
   {
     if(authUser){
           dispatch({
            type: "SET_USER",
            user: authUser,
           });
     }
     else{
      dispatch({
        type: "SET_USER",
        user: null,
       });

     }

   });

   return ()=>{

     unsubscribe();

   }

  }, []);

  console.log("USER IS >>>",user);


  return (
   <Router>
     <div className="app">
     <Routes>
      <Route path="/checkout"
        element= {
          <div>
            <Header/> 
             <Checkout />
        </div>
        }>
       
      </Route>
      <Route path="/login"
       
       element={
       <div>
          
          <Login/>
       </div>
       }>
          
      </Route>

      <Route path="/"
        element={
      <div>
        <Header/>
        <Home/>
        

      </div> }
      >

      </Route>
     
      </Routes>
    
    </div>
   </Router>
  );
}

export default App;
