//bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

//-----------------------------------------------

import React ,{useState, useEffect} from 'react'
import axios from 'axios'



function Users() {

    const  [users, setUsers] = useState([])

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])


  return (
        <ul>
            {
                users.map(user => (
                    <div className=' container'>
                        <ListGroup className='list'>
                            <ListGroup.Item><strong>name:</strong> {user.name}</ListGroup.Item>
                            <ListGroup.Item><strong>username:</strong>  {user.username}</ListGroup.Item>
                            <ListGroup.Item><strong>email:</strong>{user.email}</ListGroup.Item>
                            <ListGroup.Item><strong>street:</strong> {user.address.street}</ListGroup.Item> 
                            <ListGroup.Item><strong>suite: </strong>{user.address.suite}</ListGroup.Item> 
                            <ListGroup.Item><strong>city: </strong>{user.address.city}</ListGroup.Item> 
                            <ListGroup.Item><strong>zipcode:</strong> {user.address.zipcode}</ListGroup.Item>      
                        </ListGroup>
                        <hr className='m-4'/>
                    </div>     
                ))
            }
        </ul>
       
  )
 
}

export default Users
