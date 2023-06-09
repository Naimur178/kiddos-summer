import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    useEffect(() => {
        document.title = "Register"; 
      }, []);
    const [errors, setErrors] = useState();
    const {createUser} = useContext(AuthContext);
    const auth = getAuth();

    const handleRegister= event=> {
        event.preventDefault();
        const form = event.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        if(password.length==0 || email.length==0){
            return setErrors('email and password field cannot be empty')
        }
        if(password.length<6){
            return setErrors("password length must be 6 or more ")
        }
        
        console.log(name, email, photoURL, password);
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            updateUserData(result.user, name, photoURL);
            console.log(createdUser);
            setErrors('');
        })
        .catch(error =>{
            console.log(error);
            setErrors(error.message)
        })
        


    }
    const updateUserData = (user, name, url)=>{
        updateProfile(user, {
            displayName: name,
            photoURL : url
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                setErrors(error.message);
            })
    }
    return (
        <div>
            <section className="bg-base-200 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <a href="#" className="flex items-center mb-6 mt-5 text-3xl font-bold text-gray-900 dark:text-white">
          
          The Chinese Flavours    
      </a>
      <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-16 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" name="name" id="name" placeholder="Your Name Please" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                      <input type="url" name="photo" id="photo" placeholder="put your photo url" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  {/* <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div> */}
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300" name='accept'>I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to='/terms'>Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <div>
                    {
                        errors && <p className='text-red-500 font-semibold'>{errors}</p>
                    }
                  </div>
                  <button type="submit" className="w-full focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn btn-outline dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    );
};

export default Register;