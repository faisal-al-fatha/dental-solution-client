import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../src/Assets/Images/LogIn.jpg";
import { AuthContext } from "../../Layout/Main";

const Login = () => {

    const { providerLogin, logIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError]= useState('');

    const from = location.state?.from?.pathname|| '/';
    const handleLogIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from, {replace: true});

        })
        .catch(error=> {
            setError(error.message)
        })
    }
    
    const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error=> console.error(error))
        }

        const handleGitHubSignIn = () =>{
            providerLogin(gitHubProvider)
            .then(result =>{
                const user = result.user;
                console.log(user);
            })
            .catch(error=> console.error(error))
                }
                

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="w-full max-w-xl xl:px-8 lg:w-5/12 mx-auto my-5">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Please Log In
            </h3>
            <form onSubmit={handleLogIn}>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="email" className="inline-block mb-1 font-medium">
                  E-mail
                </label>
                <input
                  placeholder="john.doe@example.org"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="password" className="inline-block mb-1 font-medium">
                  Password
                </label>
                <input
                  placeholder="!@#$%^&*123"
                  required
                  type="password"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                />
              </div>
              <p className="text-xs mt-3 text-red-600 sm:text-sm text-center">
              {error}
            </p>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded-none shadow-md btn btn-outline bg-rose-500 text-white hover:bg-rose-800 focus:shadow-outline focus:outline-none"
                >
                  Submit
                </button>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full " />
                <p className="px-3 ">OR</p>
                <hr className="w-full " />
              </div>
              <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button  onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
		<button onClick={handleGitHubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
              <p className="text-xs mt-3 text-gray-600 sm:text-sm text-center">
           Don't have an account? Please <Link to={'/registration'} className="link link-primary">Register</Link>
          </p>
            </form>
          </div>
        </div>
            </div>
        </div>
    );
};

export default Login;