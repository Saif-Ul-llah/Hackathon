import './Ap.css';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


function Login(){
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const checkUser=(e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log("singin ",user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("erefkjhj",error);
    });
    }

    return(
        <div id="first">
         {/* <input type="button" value="SignUp" id='SignUp'onClick={signUp} />
         <input type="button" value="Login" id='Login'onClick={login} /> */}
      <div id="login">
    <h2 id='h2'>SAYLANI WELFARE</h2>
    <h3 id='h4'>ONLINE DISCOUNT STORE</h3>
  <div className='inp'>
  <form onSubmit={checkUser} >
    <input id="email" placeholder="Email" type="text" onChange={(e)=>{setEmail(e.target.value)}}/><br />
    
    <input id="contact" placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
    
    <input id="submit" type="submit" value="Sign In"/><br />
    </form>
  </div>
   </div>

       </div>
    )
}

export default Login;