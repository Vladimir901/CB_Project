// @ts-nocheck
import React, { useEffect } from "react" 
import { useContext, useState } from "react"
import {useForm} from "react-hook-form"
import { Context } from "../.."
import {observer} from "mobx-react-lite"
import { useNavigate } from "react-router-dom";

// import { useData } from "../../DataContext";
import "./singin.css"

function Singin(){
// const [data, setValues] = useData()
// const history = useNavigate ()



const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate();

const handleClick = () => {
    store.login(username, password)
    console.log(store.isAuth.toString())
    if (!store.isAuth === true){      
      navigate("/home");
    }
   
}
const {store} = useContext(Context)
useEffect(()=>{
  if (localStorage.getItem('token')){
    store.checkAuth()
  }
}, [])

// @ts-ignore
const {register, formState: {errors, isValid}} = useForm({ mode:"onBlur"})

  return (
    <div className='app'>     
      <div className='e3_7011'>
        <h1  className="e3_6976">Log In Daily Shelf</h1>
      </div>
      
      <form id="singin">
          <div className='e2_6795'>
            <div className='e3_6883'>
              <span  className="e3_6897">Username or email address</span>
                <div className='ei3_6899_1_1035'>
                   
                    <input className="data_input"
// @ts-ignore
                    onChange={e=>setUsername(e.target.value)} {...register('username',{required:" Это поле обязательно", 
                                                      minLength: {value: 4, message: " Логин должен быть длиннее"}})} 
                                                    /> 
                    {errors.username && <span className="error_text">{errors.username.message}</span>}

                    <span  className="e3_6898">Password</span>
                    <div className='password'>
                     
                    <input className="data_input"
// @ts-ignore
                    onChange={e=>setPassword(e.target.value)} {...register('password',{required:" Это поле обязательно", 
                                                      minLength: {value: 4, message: " Пароль должен быть длиннее"}})} 
                                                      type="password"/> 
                    {errors.password && <span className="error_text">{errors.password.message}</span>}
                    </div>   
                  </div>  
                  <button onClick={(e)=>handleClick(e)} type='submit' className="ei6_1793_3_6922_1_3106">Log In</button>
                  <span  className="ei3_6903_1_1144_1_1023">Forgot password</span>   
                </div>
                  
              </div>
          </form>

          <div  className="e3_7006">
                <span  className="e3_7008">New to Daily Shell?  <a href="/singup" className="e3_7009">Create an account </a></span>
          </div>

    </div>
    );

};

export default observer(Singin);