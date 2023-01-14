import './App.css';
import FunC from './components/FunC';
import ClassC from './components/ClassC';
import With from './jsx/With';
import WithOut from './jsx/WithOut';
import Events from './event/Events';
import Ball from './event/Ball';
import StatewFcom from './state/StatewFcom';
import Increment from './state/IncreDecrement';
import StatewCc from './state/StatewCc';
import Students from './props/Students';
import Student from './Student';
import StudentCc from './props/StudentCc';
import GetInput from './form/GetInput';
import HideShow from './form/HideShow';
import HandleForm from './form/HandleForm';
import Profile from './form/Profile';
import Login from './form/Login';
import User from './props/User';
import Members from './props/Members';

function App(){

  // function getData(){
  //   alert("Hello from app")
  //  }

  return(
       <div className="App">

       {/* call functional components */}
       {/* <FunC/>
       <ClassC/>
       <With/>
       <WithOut/> */}

         {/* <Events/>  */}
        {/* <Ball/> */}
         
         {/* <StatewFcom/>
         <Increment/>
         <StatewCc/>  */}
        
        {/* <Students name={"Prasad !"} email="prasad@123gmail.com" other={{address:"delhi", mobile:"124567865"}}/>
        <Students name={" MySelf !"} /> */}
         
         {/* <StudentCc name={" aparna"} email="aparna@212gamil.com"/> */}
      
        {/* <GetInput/> */}

        {/* <HideShow/> */}

        {/* <HandleForm/> */}

        {/* <Profile/> */}

        {/* <Login/> */}
       
       {/*        
        <User data={getData}/>
        <User data={getData}/>
        <User data={getData}/>
        <User data={getData}/>
        <Members data={getData}/> */}


       </div>
  ) 
}
export default App;

