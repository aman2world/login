import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <div>
                <h2>Create <br/> Account</h2>
                </div>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder='Enter name' />
                    <hr/>
                    <input type="text" {...register("email")} placeholder='Enter email'/>
                    <hr/>
                    <input type="text" {...register("password")} placeholder='Enter password' />
                    <hr/>
                    <input type="text" {...register("password")} placeholder='Confirm password'/>
                    <hr/>
                    
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn1'>Sign Up</button>

                <div>                    
                    <div className="form-link">
                        <span>Back to<a href="#" className="link signup-link"> &nbsp; Sign in</a></span>
                    </div>
                </div>
                </form>
              </div>
        </div>
    </section>
  )
}
