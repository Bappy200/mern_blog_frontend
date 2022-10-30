import React from 'react'
import { Layout } from '../../components'
import { useForm} from "react-hook-form";
import "./Login.css"

function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);
  
  return (
   <Layout>
      <div className='login_section'>
          <div className='login_content'>
            <h4 className='login_content_title'>login</h4>
            <form className='login_content_form' onSubmit={handleSubmit(onSubmit)}>
                <div className='login_conent_from_input'>
                    <label>email</label>
                    <input type="email" {...register("email", {required:true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})} />
                    {errors.email && <span className='error_login'>Email is not valid.</span>}
                </div>
              <div className='login_conent_from_input'>
                    <label>password</label>
                    <input type="password" {...register("password", { min:8, max:20})} />
                    {errors.password && <span className='error_login'>Password is not valid</span>} 
              </div>
              <input className='login_submit' value="Login" type="submit" />
            </form>
          </div>
      </div>
   </Layout>
  )
}

export default Login