import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../modules/AuthContext'
import { useNavigate, redirect, Navigate } from 'react-router-dom'
import { firebaseSignIn } from '../firebase'

const PageLogin = () => {

    const user = useContext(AuthContext)
    //console.log('>>> Login page: ', user.user)

    const navigate = useNavigate()

    useEffect(() => {
        if (user.user !== undefined) {
            console.log('NOT UNDEF \n', user.user)
        } else {
            console.log('UNDEF \n', user.user)
        }

    }, [user])


    const [canSubmit, setCanSubmit] = useState(false)
    const [loading, setLoading] = useState(false)

    // form data in an object
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // form return error state
    const [formError, setFormError] = useState('')


    // validate email text
    const emailValidator = email => {
        if (!email) {
            return false;
        } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            return false
        }
        return true
    }


    // maybe we complicate it later...
    const passwordValidator = pass => {
        if (!pass) {
            return false
        }
        return true
    }


    // set states when changing input fields
    const onUpdateField = ev => {
        // create form object with new data
        const nextFormData = {
            ...formData,
            [ev.target.name]: ev.target.value
        }

        // enable submit only when all inputs are correct
        setCanSubmit(emailValidator(nextFormData.email) && passwordValidator(nextFormData.password))

        // save state
        setFormData(nextFormData)
    }


    // error states text
    const [loginEmailErrorText, setLoginEmailError] = useState('')
    const [loginPasswordErrorText, setLoginPasswordError] = useState('')


    // get readable error message from firebase login 
    const setErrorMessages = (error) => {
        if (error.code === 'auth/invalid-email') setLoginEmailError(error.message);
        if (error.code === 'auth/wrong-password') setLoginPasswordError(error.message);
    }


    // submit form, handle login 
    const handleFormSubmit = async (e) => {
        // stop autoreload
        e.preventDefault()

        // loading state / overlay or smth
        setLoading(true)

        // null out error messages
        setLoginEmailError('')
        setLoginPasswordError('')

        try {
            const userRes = await firebaseSignIn(formData.email, formData.password)
            // set location to home page
            navigate('/home')

        } catch (error) {
            console.error('>>> Firebase Auth Error! ', error.code)
            setErrorMessages(error)
        }

        setLoading(false)
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen flex-col">
                <h1 className="mb-6">Login</h1>

                <div className="p-6 card bg-dark w-96 shadow-lg rounded-xl">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-8">
                            <label className="block text-sm mb-2" htmlFor="useremail">email</label>
                            <input
                                className="w-full py-3 px-3 leading-tight"
                                id="useremail"
                                name="email"
                                type="email"
                                disabled={loading}
                                placeholder="Username"
                                value={formData.email}
                                onChange={onUpdateField}
                            />
                            <p className='text-xs mt-2 text-primary'>{loginEmailErrorText}</p>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm mb-2" htmlFor="userpassword">Password</label>
                            <input
                                className="w-full py-3 px-3 mb-3 leading-tight"
                                id="userpassword"
                                name="password"
                                type="password"
                                disabled={loading}
                                placeholder="***"
                                value={formData.password}
                                onChange={onUpdateField}
                            />
                            <p className='text-xs mt-2 text-primary'>{loginPasswordErrorText}</p>
                        </div>

                        {loading &&
                            <div className='mb-8 text-center'>Loading...</div>
                        }

                        <div className="flex items-center justify-end">
                            <button
                                className="bg-secondary"
                                disabled={(canSubmit) ? "" : "disabled"}
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