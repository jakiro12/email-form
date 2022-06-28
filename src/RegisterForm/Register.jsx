import { useState } from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
function Register(){
    const[name,setName]=useState('')
    const[pass,setPass]=useState('')
    const navigate=useNavigate()
    const[alert,setAlert]=useState('')

    const createUser=(e)=>{
        e.preventDefault()
        if(name.length >4 && pass.length >4)
       { const newUserCreated={
            newEmail:name,
            newPassword:pass
        }
        fetch('http://localhost:3001/validusers',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({created:newUserCreated})
        })
        navigate('/')
    }else{
        setAlert('short username')
    }
     
        
        
    }
    return(<DivFather>
        <Formik onSubmit={createUser}>
        <DiveForm>
            <p>Set up Your account</p>
                <input placeholder="Username" type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                <div>
                {<p>{alert}</p>}</div>
                <input placeholder="Password" type='password' value={pass} onChange={(e)=>setPass(e.target.value)} ></input>

                <button>Proceed</button>
                
            </DiveForm>
        </Formik>
    </DivFather>)
}
export default Register
const Formik= styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`
const DiveForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: #000000CC;
    width: 500px;
    height: 300px;
    outline: 2px solid black;
    p{
        margin-left: 30%;
        color: #fff;
        font-family: "Roboto",-apple-system,"Segoe UI","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif!important;
    }
    div{
        height: 22px;
    }
    input{
        width: 200px;
        height: 35px;
        margin-left: 30%; 
        margin-top:30px ;
        outline: none;
        border: 1px solid black;
        border-radius: 12px;
        background-color: #141820;
        color: #c2c2c2;
        margin-bottom: -10px;
    }
    button{
        margin-left: 30%;  
        width: 204px;
        height: 35px;
        margin-top: 7%;
        border: none;
        border-radius: 12px;
        color: white;
        background: linear-gradient(90deg, rgba(255,0,219,1) 25%, rgba(9,30,121,1) 100%);
    }
`
const DivFather=styled.div`
    background-color:#7D05F2;
    height: 100vh;
`