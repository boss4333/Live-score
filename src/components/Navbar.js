import React from "react";
import { NavLink } from "react-router-dom";
import Cricket from '../img/cricket.png';
import './Navbar.css';
// import AppBar from "@material-ui/core/AppBar";
// import {
//   Button,
//   IconButton,
//   makeStyles,
//   Toolbar,
//   Typography,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyle = makeStyles((theme) => {
//   console.log("STYLE", theme);
// });

// const Navbar = () => {
//   const classes = useStyle();

//   return (
//     <div>
//       <AppBar color="primary" position="static" style={{ flexFlow: 1 }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit">
//             <MenuIcon />
//           </IconButton>

//           <Typography variant="h6">Live Score </Typography>

//           <span style={{ flexGrow: 1 }}></span>

//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;
const Navbar=()=>{
  return(<>
  <div className="container-fluid nav_bg d-flex justify-content-center">
    <div className="row">
      <div className="col-10 mx-auto">
       
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
     <img className="img-nav" style={{width: 90,height:70}} src={Cricket} alt=""/>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ">

        <li className="nav-item">
          <NavLink activeClassName="menu_active"   exact className="nav-link active" aria-current="page" to="/">Cricket</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/twenty">T20 Odi Test</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/firstclass">First-class</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/others">Others</NavLink>
        </li>     
          
       </ul>
     </div>
  </div>
</nav>
   </div>
    </div>
  </div>       

  </>)
}
export default Navbar;
 
