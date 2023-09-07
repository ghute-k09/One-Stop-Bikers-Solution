import { useRef, useState } from 'react';
import"bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import  axios from 'axios';



function UserRegistration() {
    let [user, setuser] = useState({ 
  
    name: "", 
      password:"",
      email:"",
      phoneNumber: "",
      cpassword:"",
       });

    let formRef = useRef();

  
    let handleNameAction = (e) => {
  
      let newuser = { ...user, name: e.target.value };
  
      setuser(newuser);
    };
  
    let handlerPasswordAction = (e) => {
  
      let newuser = { ...user, password: e.target.value };
  
      setuser(newuser);
    };
  
    let handlerCPasswordAction = (e) => {
  
      let newuser = { ...user, cpassword: e.target.value };
  
      setuser(newuser);
    };
  
  
    let handlerEmailAction = (e) => {
  
      let newuser = { ...user, email: e.target.value };
  
      setuser(newuser);
    };
  
    let handlerMobileAction = (e) => {
  
      let newuser = { ...user, phoneNumber: e.target.value };
  
      setuser(newuser);
    };
     

    
  
    let addUser = async () => {
       
     try{   
      formRef.current.classList.add("was-validated");
     
        let formStatus = formRef.current.checkValidity();
        if (!formStatus) {
          alert("Please Enter Valid Data")
            return;
        }
        let url = `http://localhost:9090/add-user`;

        try {
          const response = await axios.post(url, user);
          console.log(response.data);
          //... rest of the code
      } catch (error) {
          alert("An error occurred: " + error.message);
      }
      
     
  
      let newuser = {
        name: "",
        password: "",
        cpassword: "",
        email: "",
        phoneNumber: "",
      };
      setuser(newuser);

      formRef.current.classList.remove("was-validated");
      alert("Registred Successfully")
    } catch (err) {
      alert("Email or phoneNumber number already registered with us");
    }
      return;
  
    };
  
    return (
      <>
      <div className="row justify-content-center ">
      
      <div className="row justify-content-center align-items-center " style={{ width: "50vw" }}>
      <header className='fs-2 justify-content-center'>&#128195;  Registration Form</header>
      <form   ref = {formRef} className="needs-validation bg-primary-subtle mt-1 col-md-6 col-sm-12 " style={{'borderRadius':'10px',width: "90vw"}} noValidate>
      
        
        <div  >
        <label>Full Name</label>
        <input
          className="form-control "
          type="text"
          placeholder="Enter Name"
          value={user.name}
          minLength={6}
          onChange={handleNameAction}
          required
        />
        </div>

        <div>
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          value={user.email}
          onChange={handlerEmailAction}
          required
        />
        </div>   

        <div>
        <label>phoneNumber</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter phoneNumber"
          value={user.phoneNumber}
 
          onChange={handlerMobileAction}
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
          minLength={5}
          onChange={handlerPasswordAction}
          required
        />
       </div>

       <div>
        <label>Confirm password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm password"
          value={user.cpassword}
          minLength={5}
          onChange={handlerCPasswordAction}
          required
        />
       </div>

       
        <input
          type="button"
          value="Register"
          style={{ 
             height: "45px",
          width: "100%",
         color: "#fff",
        cursor: "pointer",
        'borderRadius':'10px',
        transition: "all 0.2s ease",
          background: "#0099ff"}}
          className="w-90 mt-3 mb-3"
          onClick={addUser}
        />
          <div  >Already have an account? <Nav.Link as={Link} to={"/login"}>
                Login here
              </Nav.Link></div>
         </form>
         </div>
         </div>
      </>
    );
  }
  

  export default UserRegistration ;


