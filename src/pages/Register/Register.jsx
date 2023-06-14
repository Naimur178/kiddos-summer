// import  { useContext, useEffect, useState } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
// import { updateProfile } from 'firebase/auth';
// import { AuthContext } from '../../providers/AuthProvider';
// import Swal from 'sweetalert2';
// import { useForm } from 'react-hook-form';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Register = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const handleTogglePassword = () => {
//         setShowPassword(!showPassword);
//       };
//     const { register, handleSubmit } = useForm();
//     useEffect(() => {
//         document.title = "Register"; 
//       }, []);
//     const [errors, setErrors] = useState();
//     const {createUser} = useContext(AuthContext);
//     const navigate = useNavigate();
    

//     const handleRegister= (data) => {
       
//         console.log(data)
//        const {name, email, password, confirm, photoURL} =data;
        
//         if(password.length==0 || email.length==0){
//             return setErrors('email and password field cannot be empty')
//         }
//         if(password.length<6){
//             return setErrors("password length must be 6 or more ")
//         }

//         const strongPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
//         if (!strongPasswordPattern.test(password)) {
//             return setErrors('Password must contain at least 6 characters, including at least one letter, one number, and one special character.');
//           }
//           if(confirm !=password)
//           {
//             return setErrors('Password does not matched');
//           }

        
        
//         console.log(name, email, photoURL, password);
//         createUser(email, password)
//         .then(result =>{
//             const createdUser = result.user;
//             updateUserData(result.user, name, photoURL);
//             console.log(createdUser);
//             setErrors('');
           
            
//         })
//         .catch(error =>{
//             console.log(error);
//             setErrors(error.message)
//         })
        
        

//     }
//     const updateUserData = (user, name, photoURL)=>{
//         user.role ='user'
       


//         updateProfile(user, {
//             displayName: name,
//             photoURL : photoURL
//         })

//             .then(() => {
//                 console.log('user name updated');
//                 console.log(user)

//                             method: 'POST',
//                             headers: {
//                                 'content-type': 'application/json'
//                             },
//                             body: JSON.stringify(user)
//                         })
//                         .then(res => res.json())
//                             .then(data => {
//                                 if (data.insertedId) {
                                    
//                                     Swal.fire({
//                                         position: 'top-end',
//                                         icon: 'success',
//                                         title: 'User created successfully.',
//                                         showConfirmButton: false,
//                                         timer: 1500
//                                     });
//                                     navigate('/');
                                    
//                                 }
//                             })

//             })

//             .catch(error => {
//                 setErrors(error.message);
//             })
//     }
    
//     return (
//         <div>
//             <section className="bg-base-200 dark:bg-gray-900">
//   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
//       <a href="#" className="flex items-center mb-6 mt-5 text-3xl font-bold text-gray-900 dark:text-white">
          
//           The Chinese Flavours    
//       </a>
//       <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-16 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                   Create and account
//               </h1>
//               <form onSubmit={handleSubmit(handleRegister)}className="space-y-4 md:space-y-6" action="#">
//                   <div>
//                       <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                       <input type="email"  {...register("email", { required: true, maxLength: 120 })} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                   </div>
//                   <div>
//                       <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//                       <input type="text"  {...register("name", { required: true })} name="name" id="name" placeholder="Your Name Please" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//                   <div>
//                       <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
//                       <input type="url" {...register("photoURL", { required: true })} name="photo" id="photo" placeholder="put your photo url" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//                   <div className="relative">
//                   <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       {...register("password", {
//                         required: true
//                       })}
//                       name="password"
//                       id="password"
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       required
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 mt-6 right-2 flex items-center justify-center"
//                       onClick={handleTogglePassword}
//                     >
//                       {showPassword ? (
//                         <FaEyeSlash className="text-gray-400" />
//                       ) : (
//                         <FaEye className="text-gray-400" />
//                       )}
//                     </button>
//                   </div>
//                   <div className="relative">
//                   <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       {...register("confirm", {
//                         required: true
//                       })}
//                       name="confirm"
//                       id="confirm"
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       required
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 mt-6 right-2 flex items-center justify-center"
//                       onClick={handleTogglePassword}
//                     >
//                       {showPassword ? (
//                         <FaEyeSlash className="text-gray-400" />
//                       ) : (
//                         <FaEye className="text-gray-400" />
//                       )}
//                     </button>
//                   </div>
                  
//                   <div className="flex items-start">
//                       <div className="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
//                       </div>
//                       <div className="ml-3 text-sm">
//                         <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300" name='accept'>I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to='/terms'>Terms and Conditions</Link></label>
//                       </div>
//                   </div>
//                   <div>
//                     {
//                         errors && <p className='text-red-500 font-semibold'>{errors}</p>
//                     }
//                   </div>
//                   <button type="submit" className="w-full focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn btn-outline dark:focus:ring-primary-800">Create an account</button>
//                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                       Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
//                   </p>
//               </form>
//           </div>
//       </div>
//   </div>
// </section>
//         </div>
//     );
// };

// export default Register;

import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit } = useForm();
  useEffect(() => {
    document.title = 'Register';
  }, []);

  const [errors, setErrors] = useState();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const { name, email, password, confirm, photoURL } = data;

    if (password.length === 0 || email.length === 0) {
      return setErrors('Email and password fields cannot be empty');
    }
    if (password.length < 6) {
      return setErrors('Password length must be 6 or more');
    }

    const strongPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!strongPasswordPattern.test(password)) {
      return setErrors(
        'Password must contain at least 6 characters, including at least one letter, one number, and one special character.'
      );
    }
    if (confirm !== password) {
      return setErrors('Passwords do not match');
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photoURL);
        setErrors('');
      })
      .catch((error) => {
        console.log(error);
        setErrors(error.message);
      });
  };

  const updateUserData = (user, name, photoURL) => {
    user.role = 'user';

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log('User name updated');
        console.log(user);
        fetch('https://last-assignment-server-iota.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          });
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };

  return (
    <div>
      <section className="bg-base-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 mt-5 text-3xl font-bold text-gray-900 dark:text-white"
          >
            The Chinese Flavours
          </a>
          <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-16 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form onSubmit={handleSubmit(handleRegister)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true, maxLength: 120 })}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    name="name"
                    id="name"
                    placeholder="Your Name Please"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    {...register('photoURL', { required: true })}
                    name="photoURL"
                    id="photoURL"
                    placeholder="Put your photo URL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute right-2 top-2.5 focus:outline-none"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FaEye className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="confirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register('confirm', { required: true })}
                    name="confirm"
                    id="confirm"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                {errors && (
                  <div className="text-red-500 text-sm">
                    <p>{errors}</p>
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    className=" btn btn-outline  flex items-center justify-center w-full px-4 py-2 tracking-wide  transition-all duration-200 bg-primary-600 rounded-xl hover:bg-primary-700 focus:ring-primary-500 focus:bg-primary-700 dark:focus:ring-primary-400 dark:bg-primary-700 dark:hover:bg-primary-700"
                  >
                    Register Now
                  </button>
                </div>
              </form>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:text-blue-600">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
