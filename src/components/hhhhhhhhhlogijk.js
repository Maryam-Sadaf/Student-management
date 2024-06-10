// import React,{useState}from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Object } from '../helpper/Object';
// // import {toast} from 'react-toastify';
// import "./login.css"
// const Profile = () => {
// 	const Navigate=useNavigate();
// 	const Navigate1=useNavigate()
//   const [user,SetUser]=useState(Object)
//   const [data,setData]=useState([]);

//   const handlerChange=(key,value)=>{
//     SetUser({...user,[key]:value})
// 	// console.log(user)
//   }
//   const addData=()=>{
// 	console.log(user)
// 	if(user.Name === ""||user.email ===""||user.password ===""){
// 		alert("plz enter valid requred")
// 	}
// 	else{
// 		Navigate('/sidebar');
// 		console.log("data added succesfully")
// 		const newrecord={user}
// 		console.log(newrecord)
// 		setData([...data,newrecord])
// 		console.log(data);
// 		let arrry=[...data,newrecord]
// 		localStorage.setItem("localdata",JSON.stringify(arrry));
// 	}
//   }
//   const getData=(e)=>{
// 	console.log(user)
// 	e.preventDefault();
// 	const getuserArry=localStorage.getItem("localdata");
// 	console.log(getuserArry);
//  const {email,password}=user;
// 	if(email===""|| password===""){
// 		alert("plz enter valid requred")
// 	}
// 	else{
		
// 		 if(getuserArry && getuserArry.length ){
// 			const userdata = JSON.parse(getuserArry);
// 			console.log(userdata)

// 			const userlogin = userdata.filter((el,k)=>{
// 						return el.email === email && el.password === password
// 					});
// 					console.log(userlogin)

// 					if(userlogin.length === 0)
// 			{
// 				alert("invalid detail")
// 			}
// 			else{
// 				console.log("user login succesfuly")
// 				Navigate1('/sidebar');
// 			}
// 		}
	
// 	}
//   }
//   return (
// <>
// <div className='main1'>
// 	<div className="main">  	
// 		<input type="checkbox" id="chk" />

// 			<div className="signup">
// 				<form>
// 					<label for="chk" >Sign up</label>
// 					<input value={user.Name} type="text" name='name' placeholder="User name" onChange={(e)=>handlerChange("Name",e.target.value)} required/>
// 					<input value={user.email} type="email" name="email" placeholder="email" onChange={(e)=>handlerChange("email",e.target.value)} required/>
// 					<input value={user.password} type="password" name="Password" placeholder="Password" onChange={(e)=>handlerChange("password",e.target.value)} required="" />
// 					<button onClick={addData}>Sign up</button>
// 				</form>
// 			</div>

// 			<div className="login">
// 				<form>
// 					<label for="chk" >Login</label>
// 					<input value={user.email}  type="email" name="email" placeholder="Email" onChange={(e)=>handlerChange("email",e.target.value)} required="" />
// 					<input value={user.password}  type="password" name="pswd" placeholder="Password" onChange={(e)=>handlerChange("password",e.target.value)} required="" />
// 					<button onClick={getData}>Login</button>
// 				</form>
// 			</div>
// 	</div>
// 	</div>
//     </>
//     );
// }
// export default Profile
