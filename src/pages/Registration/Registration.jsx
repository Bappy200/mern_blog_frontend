import React from 'react'
import { useForm } from 'react-hook-form';
import { Layout } from '../../components';
import "./Registration.css"

function Registration() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout>
      <div className='register_section'>
        <div className='register_content'>
            <h4 className='login_content_title'>Registration</h4>
            <form className='register_content_form' onSubmit={handleSubmit(onSubmit)}>
                  <div className='register_conent_from_input'>
                      <label>User name</label>
                      <input type="text" {...register("uname", {required:true, min:2, max:20})} />
                      {errors.uname && <span className='error_register'>User name is not valid.</span>}
                  </div>
                  <div className='register_conent_from_input'>
                      <label>email</label>
                      <input type="email" {...register("email", {required:true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})} />
                      {errors.email && <span className='error_register'>Email is not valid.</span>}
                  </div>
                  <div className='register_conent_from_input'>
                      <label>password</label>
                      <input type="password" {...register("password", { min:8, max:20})} />
                      {errors.password && <span className='error_register'>Password is not valid</span>} 
                  </div>
                  <div className='register_conent_from_input'>
                      <label>User profile</label>
                      <input type="file" {...register("userImage", {required:true})} />
                      {errors.userImage && <span className='error_login'>Profile is not valid</span>} 
                  </div>
                  <input className='login_submit' value="Registration" type="submit" />
            </form>
        </div>
    </div>
    </Layout>
  )
}

export default Registration