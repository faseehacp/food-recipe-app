import React, { useState } from "react";
import "./Home.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from "../../components/Main/Main";

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
