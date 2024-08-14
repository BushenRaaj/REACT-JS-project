import React from "react";
import ReactDOM from "react-dom";
import Header from './comp/header';
import Mywebsite from './comp/mywebsite';
import Footer from './comp/footer';


function Message(){
  return(
  <div>
  <Header/>
  <Mywebsite/>
  <Footer/>
  </div>
  )
}
ReactDOM.render(<Message/>,document.getElementById("root"));