import { useState } from "react";

function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handSubmit =()=> {
        console.log(data)
    }
    return (
        <div> 
            Enter Your Username:<input type="text" value={data.username} onInput={(e) => setData({...data,username:e.target.value})}></input><br></br>
            Enter Your Password:<input type="password" value={data.password} onInput={(e) => setData({...data,password:e.target.value})}></input><br></br>
            <input type="checkbox" ></input>is Admin?<br></br>
            <button onClick={handSubmit}>Login</button>
        </div>
    )
}
export default (Login);