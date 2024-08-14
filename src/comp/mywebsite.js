import React from "react";
import ReactDOM from "react-dom";
import "./mywebsite.css";

function Mywebsite(){
    return(
    <div>
    <h2>Student Table</h2>
    <table class="tab">
      <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Dept</th>
        <th>PhNo</th>
      </tr>
  
      <tr>
      <td>1</td>
      <td>raja</td>
      <td>IT</td>
      <td>3652634685</td>
      </tr>
      
      <tr>
      <td>2</td>
      <td>hera</td>
      <td>IT</td>
      <td>4562635325</td>
      </tr>
      
      <tr>
      <td>3</td>
      <td>zoi</td>
      <td>IT</td>
      <td>3694785569</td>
      </tr>
      
      <tr>
      <td>4</td>
      <td>bhushan</td>
      <td>IT</td>
      <td>7358954625</td>
      </tr>
      
      <tr>
      <td>5</td>
      <td>raaj</td>
      <td>IT</td>
      <td>8522378570</td>
      </tr>
    </table>
    
    <h2>Login FORM</h2>
    <form>
  <tr>
    <td>Username</td>
    <td><input type="text" placeholder="Enter your username"></input></td>
  </tr>
  <tr>
    <td>Password</td>
    <td><input type="text" placeholder="Enter your password"></input></td>
  </tr>
  <tr>
    <td colspan="2">
      <div class="button-container">
        <button type="submit">Login</button>
        <button type="reset">Cancel</button>
      </div>
    </td>
  </tr>
</form>
    <br></br>
    </div>
  
    )
  }
  export default Mywebsite;