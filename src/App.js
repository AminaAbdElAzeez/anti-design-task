import './App.css';
import {useLayoutEffect, useState} from 'react'
import {Table, Divider } from 'antd'



function App() {
  const [users,setUsers]=useState([]);

  useLayoutEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((res)=>setUsers(res))
  },[])

  return (
    <div className="App">
      <div>
        <Divider>Middle Size Table</Divider>
        <Table dataSource={users} size="middle">
          <column title="First Name" dataIndex='name' key="name" />
          <column title="Age" dataIndex='id' key="id" />
          <column title=" Address" dataIndex='username' key="username" />
        </Table>
      </div>
      <div>
        <Divider>Small Size Table</Divider>
        <Table dataSource={users} size="small">
          <column title="First Name" dataIndex='name' key="name" />
          <column title="Age" dataIndex='id' key="id" />
          <column title=" Address" dataIndex='username' key="username" />
        </Table>
      </div>
    </div>
  );
}

export default App;
