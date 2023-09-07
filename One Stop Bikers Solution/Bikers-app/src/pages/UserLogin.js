import { useRef, useState} from 'react';
import"bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import  axios from 'axios';

function UserLogin() {

 const navigate = useNavigate();
  let formRef = useRef();
 

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

 /*let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        alert("INVALID")
        return;
      }

     
      let url = `http://localhost:9090/login?email=${user.email}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
     
    } 
  //  }*/
  

const loginAction = async () => {
  try {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert("INVALID");
      return;
    }

   
      let url = "http://localhost:9090/login";
      let data = {
        email: user.email,
        password: user.password,
      };

      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    if (response.ok) {
      let result = await response.json();
      
      if (result && result.message === "Logged in successfully") {
        localStorage.setItem("loginStatus", "true");
        navigate("/home", { replace: true });
    } else {
        throw new Error("Invalid credentials");
    }
    

   
    }
  } catch (err) {
    alert(err.message);
  }
}


  
    return (
      <>


      <div className="row justify-content-center ">    
      <div className="row justify-content-center align-items-center " style={{ width: "50vw" }}>
      <header className='fs-2'>&#128195; Login Form</header>
      <form   ref = {formRef} className="needs-validation bg-primary-subtle mt-1 col-md-6 col-sm-12 " style={{'borderRadius':'10px',width: "90vw"}} noValidate>
      
        
        

        <div>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          value={user.email}
          onChange={handlerEmailAction}
          required
        />
        </div>   


        <div>
        <label>Password</label>
         <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={user.password}
          onChange={handlerPasswordAction}
          required
        />
       </div>

      

       
        <input
          type="button"
          value="Login"
          style={{ 
             height: "45px",
             width: "100%",
             color: "#fff",
             cursor: "pointer",
            'borderRadius':'10px',
            transition: "all 0.2s ease",
            background: "#0099ff"}}
          className="w-90 mt-3 mb-3"
          onClick={loginAction}
        />
          <div  >Don't have an account? <Nav.Link as={Link} to={"/registration"}>
                Register here
              </Nav.Link></div>
         </form>
         </div>
         </div>
      </>
    );
  }
  

  export default UserLogin ;