import React, {useState} from "react";
import Songs from "./Songs";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";




export default function Form() {


  const[name, setName] = useState('');
  const[age, setAge] = useState('');
  const[email, setEmail] = useState('');

  let history = useNavigate();

  const handleSub =(e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0,8);

    let a = name;
    let b = age;
    let c = email;

    Songs.push({id: uniqueId, Name : a, Age: b, Email : c});

    history("/")
  }





  return (

    <div>

      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">Name</label>
          <input type="text" class="form-control" id="validationCustom01" required onChange={(e) => setName(e.target.value)}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label" id="text">Age</label>
          <input type="text" class="form-control" id="validationCustom02" required onChange={(e) => setAge(e.target.value)}/>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label" id="text">Email</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required onChange={(e) => setEmail(e.target.value)} />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label" id="text">City</label>
          <input type="text" class="form-control" id="validationCustom03" required />
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label" id="text">State</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label" id="text">Zip</label>
          <input type="text" class="form-control" id="validationCustom05" required />
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit"  onClick={(e) => handleSub(e)} >Submit form</button>
        </div>
      </form>



    </div>
  )
}