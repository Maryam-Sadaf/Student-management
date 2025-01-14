import React, { useState } from 'react';
import "./dashbord.css"

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,    
}from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
const Sidebar = () => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"dashboard"   ,
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
        return (
        <div className="container">
      
           <div style={{width: isOpen ? "300px" : "100px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Student</h1>
                   <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        <div class="topnav">
        {/* <header className='header'>

        <nav class="navbar navbar-expand-lg  fixed-top menu">
        <div class="container-fluid">
      
          <input type="text" placeholder="Search.."/>
        
    </div>
  </nav>
  
</header> */}
            <main>
              <Outlet/>
           </main>
          </div>
        </div>
    );
};

export default Sidebar;