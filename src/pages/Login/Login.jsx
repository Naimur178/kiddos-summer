// import  { useContext, useEffect, useState } from 'react';
// import { FaGithub,  FaEyeSlash } from 'react-icons/fa';
// import {  Link, useLocation, useNavigate } from 'react-router-dom';
// import { FcGoogle} from "react-icons/fc";

// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import { GithubAuthProvider } from "firebase/auth";
// import { AuthContext } from '../../providers/AuthProvider';
// import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';

// const Login = () => {

//     const [show, setShow] = useState('password');
//     const handleShowHide = ()=>{
//         if (show== 'password'){
//             setShow('text');
//             return;
//         }
//         setShow('password')
//     }
//     useEffect(() => {
//         document.title = "Login";
//       }, []);
//     const [errors, setErrors] = useState();
//     const navigate = useNavigate();
//     const { logIn } = useContext(AuthContext);
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/"

//     const googleProvider = new GoogleAuthProvider();
//     const githubProvider = new GithubAuthProvider();
//     const auth = getAuth();
//     const googleLogInHandler = () =>{
//         signInWithPopup(auth, googleProvider)
//         .then((result) =>{
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const loggedUser = result.user;
//             fetch('http://localhost:5000/users', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(loggedUser)
//                 })
//                     .then(res => res.json())
//                     .then(() => {
//                         navigate(from, { replace: true });
//                     })

//         })
//         .catch(error =>{
//             const errorMessage = error;
//         })
//     }

//     const handleLogIn = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         if(password.length==0 || email.length==0){
//             return setErrors('email and password field cannot be empty')
//         }
//         if(password.length<6){
//             return setErrors("password length must be 6 or more ")
//         }

//         logIn(email, password)
//         .then(result => {
//             const loggedUser = result.user;
//             console.log(loggedUser);
//             const userMail ={
//                 email: loggedUser.email
//             }
//             Swal.fire({
//                 title: 'User Login Successful.',
//                 showClass: {
//                     popup: 'animate__animated animate__fadeInDown'
//                 },
//                 hideClass: {
//                     popup: 'animate__animated animate__fadeOutUp'
//                 }
//             });

//             navigate(from, {replace: true});
//             setErrors(null)
//             fetch('http://localhost:5000/jwt', {
//                 method: 'POST',
//                 headers: {
//                     'content-type' : 'application/json'
//                 },
//                 body: JSON.stringify(userMail)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log('jwt response', data);
//                 //Not the best way to set in the localStorage
//                 localStorage.setItem('access-token', data.token)
//             })
//         } )
//         .catch(() => {
//             setErrors('Invalid Email or password')
//         })

//     }
//     const githubHandler = () =>{
//         signInWithPopup(auth, githubProvider)
//         .then((result) =>{
//             const credential = githubHandler.credentialFromResult(result);
//             const token = credential.accessToken;
//             const loggedUser = result.user;
//             navigate(from)
//         })
//         .catch(error =>{
//             const errorMessage = error;
//         })
//     }

//     return (
//         <div>
//             <Helmet>
//                 <title>Kiddos | Login</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col ">
//                     <div className="text-center lg:text-left lg:px-36 lg:mx-6">
//                         <h1 className="text-5xl font-bold">Login now!</h1>

//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <div className='flex flex-row'>
//                                 <button onClick={githubHandler}  className="btn btn-outline basis-1/2 mx-auto text-2xl"> <FaGithub /> </button>
//                                 <button onClick={googleLogInHandler}  className="btn btn-outline basis-1/2 mx-1"><span className='text-xl'><FcGoogle /></span> oogle </button>

//                             </div>
//                             <div>
//                                 <p className='text-center'>or</p>
//                                 <hr />
//                             </div>

//                             <form onSubmit={handleLogIn} className="space-y-4 md:space-y-6" action="#">
//                                 <div>
//                                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                                     <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                                     <input type={show} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                                     <button onClick={handleShowHide} className="btn btn-xs w-full -mt-5"><FaEyeSlash></FaEyeSlash></button>

//                                 </div>
//                                 <div>
//                                     <p className='text-red-500'>{errors}</p>
//                                 </div>

//                                 <button type="submit" className="w-full btn btn-outline font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">LOG IN</button>

//                             </form>

//                             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                                 Havet not any account? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register Here</Link></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import { useContext, useEffect, useState } from "react";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();

  const googleLogInHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const loggedUser = result.user;
        fetch("https://last-assignment-server-iota.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error;
      });
  };

  const handleLogIn = (data) => {
    event.preventDefault();
    const { email, password } = data;

    if (password.length === 0 || email.length === 0) {
      return setErrors("Email and password fields cannot be empty.");
    }
    if (password.length < 6) {
      return setErrors("Password length must be 6 or more.");
    }

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        const userMail = {
          email: loggedUser.email,
        };
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        navigate(from, { replace: true });
        setErrors(null);
        fetch("https://last-assignment-server-iota.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userMail),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            localStorage.setItem("access-token", data.token);
          });
      })
      .catch(() => {
        setErrors("Invalid Email or password");
      });
  };

  const githubHandler = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = githubHandler.credentialFromResult(result);
        const token = credential.accessToken;
        const loggedUser = result.user;
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error;
      });
  };

  return (
    <div>
      <Helmet>
        <title>Kiddos | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left lg:px-36 lg:mx-6">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex flex-row">
                <button
                  onClick={githubHandler}
                  className="btn btn-outline basis-1/2 mx-auto text-2xl"
                >
                  {" "}
                  <FaGithub />{" "}
                </button>
                <button
                  onClick={googleLogInHandler}
                  className="btn btn-outline basis-1/2 mx-1"
                >
                  <span className="text-xl">
                    <FcGoogle />
                  </span>{" "}
                  oogle{" "}
                </button>
              </div>
              <div>
                <p className="text-center">or</p>
                <hr />
              </div>
              <form
                onSubmit={handleSubmit(handleLogIn)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true, maxLength: 120 })}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        maxLength: 120,
                      })}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center justify-center"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400" />
                      ) : (
                        <FaEye className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-red-500">{errors}</p>
                </div>
                <button
                  type="submit"
                  className="w-full btn btn-outline font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
                >
                  LOG IN
                </button>
              </form>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Havet not any account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
