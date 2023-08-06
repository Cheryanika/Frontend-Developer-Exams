import React, { useEffect, useState } from 'react';
import './Froms.css';

export const Froms = () => {
    const initialvalues ={firstname:"",lastname:"",email:"",password:"",verifypassword:"",gender:""};
    const [formValues, setFormValues]= useState(initialvalues);
    const [formErrors, setFormeError]= useState({});
    const [isSubmit, setIsSubmit]= useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormeError(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() =>{
            console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors, formValues, isSubmit]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname){
            errors.firstname = "First name is required"
        }
        if (!values.lastname){
            errors.lastname = "Last name is required"
        }
        if (!values.email){
            errors.email = "Email is required"
        } else if(!regex.test(values.email)){
            errors.email ="This is not a valid email format";
        }
        if (!values.password){
            errors.password = "Password is required"
        }
        if (!values.verifypassword) {
            errors.verifypassword = "Verify password is required";
          } else if (values.password !== values.verifypassword) {
            errors.verifypassword = "Passwords do not match";
          }
          if (!values.gender || values.gender === "Please select a gender") {
            errors.gender = "Gender is required";
          }
        return errors;
    }

  return (
    <div className='container'>
        <div className='form-submit'>
            <div className='form-content'>
                <h2>Form and validation</h2>
                    <form onSubmit={handleSubmit}>

                        <div className='user-details'>
                            <span htmlFor='firstname'>First&nbsp;Name</span>
                            <div className='user-form'>
                            <input 
                                type='text'
                                id='firstname' name='firstname'
                                placeholder='Please fill first name'
                                value={formValues.firstname}
                                onChange={handleChange}
                            />
                            <p>{formErrors.firstname}</p>
                            </div>
                        </div>

                        <div className='user-details'>
                            <span htmlFor='lastname'>Last&nbsp;Name</span>
                            <div className='user-form'>
                            <input 
                                type='text'
                                id='lastname' name='lastname'
                                placeholder='Please fill last name'
                                value={formValues.lastname}
                                onChange={handleChange}
                            />
                            <p>{formErrors.lastname}</p>
                            </div>
                        </div>

                        <div className='user-details'>
                            <span htmlFor='email'>E-mail</span>
                            <div className='user-form'>
                            <input 
                                type='email'
                                id='email' name='email'
                                placeholder='Please fill E-mail'
                                value={formValues.email}
                                onChange={handleChange}
                                />
                            <p>{formErrors.email}</p>
                            </div>
                        </div>

                        <div className='user-details'>
                            <span htmlFor='password'>Password</span>
                            <div className='user-form'>
                            <input 
                                type='password'
                                id='password' name='password'
                                placeholder='Please fill Password'
                                value={formValues.password}
                                onChange={handleChange}
                                />
                            <p>{formErrors.password}</p>
                            </div>
                        </div>

                        <div className='user-details'>
                            <span htmlFor='password'>Verify&nbsp;Password</span>
                            <div className='user-form'>
                            <input 
                                type='password'
                                id='verifypassword' name='verifypassword'
                                placeholder='Please fill verify password'
                                value={formValues.verifypassword}
                                onChange={handleChange}
                            />
                            <p>{formErrors.verifypassword}</p>
                            </div>
                        </div>

                        <div className='gender-details'>
                            <span htmlFor='gender'>Gender</span>
                            <div className='user-form'>
                            <select 
                                type='text' id='gender' 
                                name='gender'
                                value={formValues.gender} 
                                onChange={handleChange}>
                                    <option value=''>Please select a gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                            </select>
                            {formErrors.gender && <p className="error">{formErrors.gender}</p>}
                            </div>
                        </div>
                    <button className='submit' type='submit'>Submit</button>
                    {Object.keys(formErrors).length === 0 && isSubmit && 
                        formValues.firstname && formValues.lastname && formValues.email 
                        && formValues.password && formValues.verifypassword&& formValues.gender ?  
                    (
                        <div className='result'>
                            <h4>Result</h4>
                            <div className='resultcontent'>
                                <div className='resulttext'>
                                    <div>FirtsName:</div><span>{formValues.firstname}</span>
                                </div>
                                <div className='resulttext'>
                                    <div>LastName:</div><span>{formValues.lastname}</span>
                                </div>
                                <div className='resulttext'>
                                    <div>Email:</div><span>{formValues.email}</span>
                                </div>
                                <div className='resulttext'>
                                    <div>Gender:</div><span>{formValues.gender}</span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    </form>
            </div>
        </div>
    </div>
  )
}
