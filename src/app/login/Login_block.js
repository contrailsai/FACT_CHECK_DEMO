"use client"

import { useState } from "react";

const Login_block = ({ signIn, signUp, handleGoogleSignIn, eventInfo }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show_signup, set_show_signup] = useState(false);
    const [show_message, set_show_message] = useState(eventInfo.message);

    const [loading, setloading] = useState(false);
    const handle_pass_signin = async (e) => {
        e.preventDefault();

        setloading(true);

        if (show_signup) {
            //SIGN UP USER
            try {
                await signUp({ email, password });
            }
            catch (error) {
                console.error(error);
            }
            setloading(false);
        }
        else {
            //LOGIN USER
            try {
                await signIn({ email, password });
            }
            catch (error) {
                console.error(error);
            }
            setloading(false);
        }
    }

    return (
        <>
            <div className=' bg-white/60 backdrop-blur mt-10  flex flex-col items-center w-fit py-12 px-20 rounded-xl text-gray-800 '>

                {/* LOGO */}
                <div className=' text-4xl py-2 mb-12'>
                    Contrails.ai
                </div>

                {/* FORM */}
                <form onSubmit={handle_pass_signin} className=' flex flex-col gap-2 mb-5'>
                    <div className=' text-3xl font-light mb-2'>
                        {show_signup ? 'Create Your Account' : 'Welcome back'}
                    </div>
                    <label className=' h-0 relative z-10 font-medium text-xs top-3 left-2 ' htmlFor="password">Email</label>
                    <input
                        name='email'
                        type="email"
                        required
                        value={email}
                        className='bg-white/80 focus:bg-white outline-none pt-5 pb-1 px-2 min-w-96 rounded-sm'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className=' h-0 relative z-10 font-medium text-xs top-3 left-2 ' htmlFor="password">Password</label>
                    <input
                        name='password'
                        type="password"
                        required
                        value={password}
                        className='bg-white/80 focus:bg-white outline-none pt-5 pb-1 px-2 mb-2 min-w-96 rounded-sm'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className=' flex gap-3 items-center justify-center border p-2 font-medium hover:bg-white/15 rounded-sm transition-all'>
                        <div>
                            {show_signup ? 'Create Account' : 'Log In'}
                        </div>
                        {
                            loading &&
                            <div role="status">
                                <svg aria-hidden="true" className="w-6 h-6 text-sky-300 animate-spin fill-sky-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                        }
                    </button>

                    <div className=' font-medium text-sm text-center m-1 '>
                        {
                            show_signup ?
                                <>
                                    Already have an account?
                                    <span onClick={() => { set_show_signup(false) }} className=' px-2 cursor-pointer text-sky-800'>
                                        Login
                                    </span>
                                </>
                                :
                                <>
                                    Don&apos;t have an account?
                                    <span onClick={() => { set_show_signup(true) }} className=' px-2 cursor-pointer text-sky-800'>
                                        Signup
                                    </span>
                                </>
                        }
                    </div>

                </form>

                {/* OR */}
                <div className='flex items-center gap-3'>
                    <div className='w-32 h-0.5 bg-gray-400' />
                    <div>
                        OR
                    </div>
                    <div className='w-32 h-0.5 bg-gray-400' />
                </div>

                {/* OTHER PROVIDERS */}
                <button
                    onClick={(e) => { e.preventDefault(); handleGoogleSignIn() }}
                    className=' flex items-center gap-2 border px-4 py-3 min-w-80 border-gray-500 rounded mt-4 hover:bg-white/30 transition-all'
                >

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </span>

                    Continue with Google
                </button>

            </div>

            <div className={` absolute bottom-10 right-10 bg-white/40 backdrop-contrast-175 backdrop-blur shadow-lg min-h-20 w-72 rounded px-3 pt-2 pb-4 flex justify-between  ${show_message ? "" : "hidden"} `} >

                <div className="w-full pt-3 text-sm">
                    {eventInfo.message}
                </div>
                <svg onClick={() => { set_show_message(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>

        </>
    )
}

export default Login_block