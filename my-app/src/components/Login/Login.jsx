import React from 'react';
import axios from 'axios';
function Login(){
    return(
        <div className="container">
      <form onSubmit={(e)=>login(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    )
}
function login(e){
    e.preventDefault();
    let request={
      email:document.getElementById('exampleInputEmail1').value,
      password:document.getElementById('exampleInputPassword1').value
    }
    axios.post('http://localhost:3000/login',request)
    .then(resp=>{
      alert(resp.data.message);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  export default Login;