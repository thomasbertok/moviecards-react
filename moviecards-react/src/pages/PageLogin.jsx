import React, { useCallback, useState } from 'react'

const PageLogin = () => {


    const [canSubmit, setCanSubmit] = useState(false)

    const [loading, setLoading] = useState(false)

    //
    const [userEmailValue, setUserEMailValue] = useState('')
    const [userPasswordValue, setUserPasswordValue] = useState('')


    // error states text
    const [loginEmailErrorText, setLoginEmailError] = useState('')
    const [loginPasswordErrorText, setLoginPasswordError] = useState('')

    // get readable error message from firebase login 
    const setErrorMessages = (error) => {
        if (error.code === 'auth/invalid-email') setLoginEmailError(error.message);
        if (error.code === 'auth/wrong-password') setLoginPasswordError(error.message);
    }

    // check inputs validity
    const inputsOnChange = (ev) => {
        console.log(ev.target.name)
    }

    // submit form, handle login 
    const handleLogin = (event) => {
        // stop autoreload
        event.preventDefault()

        // loading state / overlay or smth
        setLoading(true)

        // null out error messages
        setLoginEmailError('')
        setLoginPasswordError('')

        // spread form data
        const { email, password } = event.target.elements
        console.log('asdadad ', email.value, password.value)

        setLoading(false)
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen flex-col">
                <h1 className="mb-6 font-bold">Login</h1>

                <div className="p-6 card bg-gray-900 w-96 shadow-lg rounded-xl">
                    <form onSubmit={handleLogin}>
                        <div className="mb-8">
                            <label className="block text-sm mb-2" htmlFor="useremail">email</label>
                            <input
                                className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="useremail"
                                name="email"
                                type="email"
                                placeholder="Username"
                                value={userEmailValue}
                                onChange={e => setUserEMailValue(e.target.value)}
                            />
                            <p className='text-xs mt-2 text-primary'>{loginEmailErrorText}</p>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm mb-2" htmlFor="userpassword">Password</label>
                            <input
                                className="appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="userpassword"
                                name="password"
                                type="password"
                                placeholder="*"
                                value={userPasswordValue}
                                onChange={e => setUserPasswordValue(e.target.value)}
                            />
                            <p className='text-xs mt-2 text-primary'>{loginPasswordErrorText}</p>
                        </div>

                        {loading &&
                            <div className='mb-8'>Loading...</div>
                        }

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={canSubmit ? "" : "disabled"}
                                type="submit"
                            >Sign In</button>
                            {/* <a className="inline-block align-baseline text-sm text-yellow-500 hover:text-yellow-300" href="#">Forgot Password?</a> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PageLogin