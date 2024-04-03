import React from 'react'
import { useForm } from 'react-hook-form';
// import back from '../assests/back.png';

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    console.log(watch("email"));
    
  return (
    <section>
        <div className="register">
         
            <div className="col-1">
                <div>
                <h2>Welcome <br/> Back</h2>
                </div>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    {/* INPUT FIELD */}
                    <input type="text" className="inp" {...register("email")} placeholder='Email' />
                    <hr/>
                    <input type="text" {...register("password")} placeholder='Password'/>
                    <hr/>

                    {/* BUTTONS */}
                    <div className="pass">
                        <a href="#" className="link signup-link">Forgot?</a>
                    </div>

                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

                    <button className='btn1'>Sign In</button>
                    <div className="line"></div>
                    <button className='btn2'>Sign In With Google</button>
                <div>                    
                    <div className="form-link">
                        <span>Create account? <a href="#" className="link signup-link">&nbsp; Sign up</a></span>
                    </div>
                </div>
                </form>

            </div>
        </div>
    </section>
  )
}
