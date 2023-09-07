import logo from './logo.svg';
import './App.css';
import UserLogin from './pages/UserLogin';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavigationMenu from './pages/NavigationMenu';
import UserRegistration from './pages/UserRegistration';
import UserList from './pages/UserList';
import QueryList from './pages/QueryList';
import ContactUs from './pages/ContactUs';
import OurTeam from './pages/OurTeam';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Collection from './pages/Collection';
import UserUpdate from './pages/UserUpdate';
import CarCollection from './pages/CarCollection';
import CarBook from './pages/CarBook';
import BookedCar from './pages/BookedCar';


function App() {
  return (
   <>
   <BrowserRouter>
   <NavigationMenu/>
   <Routes>


   <Route path="/" element={<UserLogin/>} />
   <Route path="/login" element={<UserLogin/>} />




      <Route 
     path="/home"
      element={<ProtectedRoute><Home/></ProtectedRoute>} 
      /> 

     <Route 
     path="/collection"
      element={<ProtectedRoute><Collection/></ProtectedRoute>} 
      /> 
     <Route 
     path="/registration"
      element={<UserRegistration/>} 
      /> 
      
      <Route 
     path="/userlist"
      element={<ProtectedRoute><UserList/></ProtectedRoute>} 
      />  

      {/*<Route 
     path="/querylist"
      element={<ProtectedRoute><QueryList/></ProtectedRoute>} 
    /> */}

    
    <Route 
     path="/contactus"
      element={<ProtectedRoute><ContactUs/></ProtectedRoute>} 
      /> 

      
    <Route 
     path="/co"
      element={<ProtectedRoute><CarBook/></ProtectedRoute>} 
      /> 


<Route 
     path="/ourteam"
      element={<ProtectedRoute><OurTeam/></ProtectedRoute>} 
      />

{/* <Route 
     path="/Bookedcarlist"
      eleRoment={<ProtectedRoute><BookedCar/></ProtectedRoute>} 
      /> */}

<Route 
     path="/carbook"
      element={<ProtectedRoute><CarBook/></ProtectedRoute>} 
      />

    
   

   <Route path="*" element={<h1>Page Not Found</h1>} />
       

    </Routes>
    <Footer/>
    </BrowserRouter>
   
   </>
  );
}

function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;