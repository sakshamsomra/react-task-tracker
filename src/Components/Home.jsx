import React from "react";

import pic1 from './home1.jpg'
import pic2 from './home2.png'
import pic3 from './home3.jpg'

import music from './music2.png';
import play from './play.png'
import { Link, useNavigate } from "react-router-dom";
import Songs from "./Songs";



function Home() {


    let history = useNavigate();

    const handleDel = (id) => {
        var index = Songs.map(function(s){
            return s.id
        }).indexOf(id);

        Songs.splice(index,1);

        history('/');


    }

    const handleEdit = (id, name , age , email) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Id', id);
        localStorage.setItem('Age', age);
        localStorage.setItem('Email', email);

    }




    return (
        <>
        

            

            <div id="mainb">
                
                
                <div id="block1"> <h1>listen to music  and enjoy what  you love</h1>

                <Link to = "/signup"><button type="button" class="btn btn-outline-success" id="sign">SIGN UP</button></Link>
                
                </div>
                
            </div>


            <div class="shadow-lg p-3 mb-5 bg-body rounded" id="music"><img src={music} />  Listen to the top hits</div>



            <h1>Users</h1>




            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"><img src={music} alt="" /></th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Songs && Songs.length > 0
                        ?
                        Songs.map((item) =>{
                            return(
                                <tr>
                                    <td></td>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {item.Email}
                                    </td>
                                    <td>

                                        
                                        <button type="button" class="btn btn-danger" id="user" onClick={() => handleDel(item.id)}>DELETE</button>
                                        <Link to = {'/edit'}><button type="button" class="btn btn-success" id="user" onClick={() => handleEdit(item.id, item.Name, item.Age, item.Email)}>EDIT</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                    
                </tbody>
            </table>



        </>
    )
}

export default Home;