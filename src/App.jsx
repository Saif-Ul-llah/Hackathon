 import { useState } from "react"
import axios from "axios";
import './App.css';
// import login from "./component/login";
import logo from "./asset/Logo.png"
import Sign from "./component/sign";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
    baseUrl = `http://localhost:5001`;
}

function App() {
const [sc, setSc]=useState(false);

const [isLogin, setIsLogin] = useState(false);
useEffect(()=>{
 const auth = getAuth();
 onAuthStateChanged(auth, (user) => {
   if (user) {
     const uid = user.uid;
     setIsLogin(true);
     // ...
   } else {
     // User is signed out
     // ...
     setIsLogin(false);
   }
 }); 
},[])

    function chan(){
        setSc(true)
    }

    return(
      <div>
          {(sc)?<Sign/>:
       <div className="img">
        <div className="im">
            <img src={logo} alt="logo" className="flogo"/>
        
        </div>
            <div>
                 <h1 className="h">SAYLANI WELFARE</h1>
                 <h2 className="h3">ONLINE DISCOUNT STORE</h2>
            </div>
            <div>
                <button className="but" onClick={chan}><h3 className="btt">Get Started</h3></button>
            </div>
       </div>}
      </div>

    )
        }
   

export default App;



