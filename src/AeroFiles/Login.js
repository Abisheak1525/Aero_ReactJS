import React from 'react';
import './login.css';
export default function Login() {
  return (
    <div>
      <table id="table">
        <center>
       <h1>LOGIN</h1>
            
        </center>
       
        <tr>
            <td>
                 UserName:
            </td>
            <td>
                <input type='text' id="in"></input>
            </td>
        </tr>
        <tr>
            <td>
                 Email:
            </td>
            <td>
                <input type='email' id="in"></input>
            </td>
        </tr>
        <tr>
            <td>
                 Password:
            </td>
            <td>
                <input type='password'id="in"></input>
            </td>
        </tr>
        <tr>
            <td colSpan="2"> 
                <button type="submit"id="but">Login</button>
            </td>
        </tr>
        <tr>
          
            <td colSpan="2"> 
                <button type="submit"id="but" >Sign in</button>
            </td>
        </tr>
      </table>
    </div>
  )
}
