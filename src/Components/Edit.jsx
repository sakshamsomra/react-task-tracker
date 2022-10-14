import React, {useState, useEffect} from "react";
import Songs from "./Songs";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";

function Edit(){


  const[name, setName] = useState('');
  const[age, setAge] = useState('');
  const[email, setEmail] = useState('');
  const[id, setId] = useState('');

  let history = useNavigate();

  var index = Songs.map(function(e){
    return e.id;
  }).indexOf(id);

  const handleSub =(e) => {
    e.preventDefault();
    
    let a = Songs[index];
    a.Name = name;
    a.Age = age;
    a.Email = email;
    

    history("/")
  }

  useEffect(() =>{
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
    setEmail(localStorage.getItem('Email'))
    setId(localStorage.getItem('Id'))
  },[])

  return (
    <>

<form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Name</label>
          <input type="text" class="form-control" id="validationCustom01" value={name} required onChange={(e) => setName(e.target.value)}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Age</label>
          <input type="text" class="form-control" id="validationCustom02" value={age} required onChange={(e) => setAge(e.target.value)}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label" id="text">Email</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-dark" onClick={(e) => handleSub(e)}>Update</button>
         
        
        
      </form>


    </>
  )

}

export default Edit;