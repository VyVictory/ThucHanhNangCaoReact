import { useState } from "react";

function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handSubmit = () => {
        console.log(data)
    }
    return (
        <div style={{display:'flex', justifyContent:"center", alignItems:'center', height:'100vh', backgroundColor:'#f8f9fa'}}>
            <div class="login-container" style={{width:'100%',maxWidth:'400px', padding:'20px', backgroundColor:'#f8f9fa', borderRadius:'8px',boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <h2 class="text-center mb-4">Login</h2>
                <form action="/login" method="POST">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" class="form-control" required value={data.username} onInput={(e) => setData({ ...data, username: e.target.value })}></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" required value={data.password} onInput={(e) => setData({ ...data, password: e.target.value })}></input>
                    </div>
                    <input type="checkbox" ></input>is Admin?<br></br>
                    <button type="submit" onClick={handSubmit} class="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    )
}
export default (Login);