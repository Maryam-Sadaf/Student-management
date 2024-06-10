import React from 'react';
import {Table,Card} from "reactstrap"
const About = () => {
    // let data=JSON.parse(localStorage.getitem("localdata"));
    // // let getuserArry=localStorage.getItem("localdata");
    // console.log(data)
    let data=JSON.parse(localStorage.getItem("localdata"))
    console.log(data);
    return (
        <div>
            <Card>
            <Table striped>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Name
      </th>
      <th>
        Email
      </th>
      <th>
        Password
      </th>
    </tr>
  </thead>
  <tbody>
    {data.map((user,ind)=>{
      return(
        <tr key={ind}>
        <th scope="row">1 </th>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
      )
    })}
  </tbody>
</Table>
</Card>
        </div>
    );
};

export default About;