import { useRef ,useState} from "react";

function UserUpdate() {
    let [user, setuser] = useState({ 
  
      name: "", 
      email:"",
      mobile:"",
    
       });

    let formRef = useRef();

  
    let handleNameAction = (e) => {
  
      let newuser = { ...user, name: e.target.value };
  
      setuser(newuser);
    };
  
   
    
  
  
    let handlerEmailAction = (e) => {
  
      let newuser = { ...user, email: e.target.value };
  
      setuser(newuser);
    };
  
    let handlerMobileAction = (e) => {
  
      let newuser = { ...user, mobile: e.target.value };
  
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
      let url = `http://localhost:4000/register?name=${user.name}&password=${user.password}&cpassword=${user.cpassword}&email=${user.email}&mobile=${user.mobile}`;
  
      let res = await fetch(url);
       
      
      if (res.status !== 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }  
  
      let newuser = {
        name: "",
        password: "",
        cpassword: "",
        email: "",
        mobile: "",
      };
      setuser(newuser);

      formRef.current.classList.remove("was-validated");
      alert("Registred Successfully")
    } catch (err) {
      alert("Email or mobile number already registered with us");
    }
      return;
  
    };
  
    return (
      <>
      <div className="row justify-content-center ">
      
      <div className="row justify-content-center align-items-center " style={{ width: "50vw" }}>
      <header className='fs-2 justify-content-center'>&#128195; Update Form</header>
      <form   ref = {formRef} className="needs-validation bg-success-subtle mt-1 col-md-6 col-sm-12 " style={{'borderRadius':'10px',width: "90vw"}} novalidate>
      
        
        <div  >
        <label>Full Name</label>
        <input
          className="form-control "
          type="text"
          placeholder="Enter Name"
          value={user.name}
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
        <label>Mobile</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter mobile"
          value={user.mobile}
          onChange={handlerMobileAction}
          required
        />
        </div>

       

      

       
        <input
          type="button"
          value="Update"
          style={{ 
             height: "45px",
          width: "100%",
         color: "#fff",
        cursor: "pointer",
        'borderRadius':'10px',
        transition: "all 0.2s ease",
          background: "rgb(130, 106, 251)"}}
          className="w-90 mt-3 mb-3"
          
        />
          
         </form>
         </div>
         </div>
      </>
    );
  }
  

  export default UserUpdate ;