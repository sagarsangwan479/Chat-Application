import React from "react";
import { Link, useLocation } from "react-router-dom";
import {Button} from "@material-ui/core";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";


const Home = () => {
     const user = "";

     const location = useLocation();

  return !user?(
    <div className="home">
      <div className="home_body shadow">
         <Sidebar/>
         {location.pathname == '/chat' && Chat() }
      </div>
    </div>
  ):
  (
      <div className="home">
          <div className="login_body shadow">
            <Login/>
              
          </div>
      </div>
  );
};

export default Home;
