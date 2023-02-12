import { useState } from 'react';
import './Ap.css';
import Login from './login';

function Sign(){

    const [log,setLog]=useState(false)

    function lo(){
        setLog(true);
    }

    return(
        <div>
            {(log)?<Login/>:
            
        <div id="first">
        {/* <input type="button" value="SignUp" id='SignUp'onClick={signUp} />
        <input type="button" value="Login" id='Login'onClick={login} /> */}
       <div id='sign'>
        <h2 id='h2'>SAYLANI WELFARE</h2>
<br />
        <h3 id='h4'>ONLINE DISCOUNT STORE</h3>
       <div className='inp'>
       <input id="fname" placeholder="Full Name" type="text"/><br />
     
     <input id="email" placeholder="Email" type="text"/><br />
    
     <input id="contact" placeholder="Password" type="password"/><br />
    
     <input id="address" placeholder="Confirm Password" type="password"/><br />
    
     <input id="submit" type="submit" value="Submit"/>
     <input id="submit" type="submit" value="login" onClick={lo}/>
       </div>
       </div>
       </div>

            }
        </div>
    )
}

export default Sign;