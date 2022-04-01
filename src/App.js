import React from "react";
import "antd/dist/antd.css";
import { Navigate } from "react-router-dom";
//import {currentUser} from './features/userAuth';
//import { useSelector } from "react-redux";
import Sider from "./components/Sider";
import Footer from "./components/Footer";
function App() {
  /*
  test username now
  const selector = useSelector(currentUser);
  console.log(selector);
  */

  //wrap component
  /*
  const PublicComponent = ({ component: Component }) => {
  
    if (extoken) return <Navigate to="/" />;
    return <Component />;
  };
  const PrivateComponent = ({ component: Component }) => {
   
    if (!extoken) return <Navigate to="/login"  />;
    return <Component />;
  };
*/
  //but can bypass login simple..

  const extoken = sessionStorage.getItem("token");
  return (
    <div className="App">
      {!extoken ? (
        <Navigate to="/login" replace></Navigate>
      ) : (
        <Navigate to="/dashboard" replace></Navigate>
      )}
    </div>
  );
}
export default App;
