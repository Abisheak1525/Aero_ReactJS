import React from 'react';
import './Proj.css';

import logo from './aero1.jpg';

export default function Sign() {
  return (
    <div id="all">
    <table id="tab">
    <tr>
    <td id="image">
    <div id="img">
        <img src={logo} alt='aroplane' height={650} ></img>
    </div>
    </td>
    <td id="form">
      <div>
      
      <form >
        <center><h1>Sign in</h1></center>
        <lable >Enter the username for your account:</lable><br/>
        <input type='text' class="input" ></input><br/>

        <br/>

        <lable>Enter your First Name:</lable><br/>
        <input type='text' class="input"></input><br/>

        <br/>

        <lable>Enter your Last Name:</lable><br/>
        <input type='text' class="input"></input><br/>
        
        <br/>
        
        <lable>Enter your email:</lable><br/>
        <input type='email' class="input" placeholder='@gmail.com' ></input><br/>
        
        <br/>
        
        <lable>Enter your Mobile Number:</lable><br/>
        <input type='tel'class="input" placeholder='+91' pattern='(+91)?[6-9]{3}[0-9]{9}'></input><br/>
        
        <br/>
        
        <lable>Enter your Password</lable><br/>
        <input type='password' class="input" minLength={8} maxLength={15} ></input><br/>
        <br/>
        <input type='checkbox'></input>Accepct the <a href="">terms and conditions</a><br/>
        <br/>
        
        <div id="div1">
              <button href='' id="button">Sign in</button>
        </div>
        
        <div id="div2">
             <p><b>or</b> if you already have a account</p>
        </div>
        
        <div id="div3">
        

        <button href='Login.js' id="login">Login</button>
        

        </div>
        
      </form>
      
    </div>
    </td>
    
    </tr>
    </table>
    </div>
  )
}
