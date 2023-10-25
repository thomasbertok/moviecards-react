import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../modules/AuthContext'
import { useNavigate, redirect, Navigate, NavLink } from 'react-router-dom'
import { firebaseSignIn } from '../firebase'
import { emailValidator, passwordValidator } from '../helpers'

import { MdLogin } from 'react-icons/md'
import LoadingIcons from 'react-loading-icons'
import pageLoginBackground from '../assets/bg-login.jpg'

const PageLogin = () => {

    // const user = useContext(AuthContext)
    const navigate = useNavigate()

    const [canSubmit, setCanSubmit] = useState(false)
    const [loading, setLoading] = useState(false)

    // form data in an object
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    // set states when changing input fields
    const onUpdateField = ev => {
        // create form object with new data
        const nextFormData = {
            ...formData,
            [ev.target.name]: ev.target.value
        }

        // enable submit only when all inputs are validated
        setCanSubmit(emailValidator(nextFormData.email) && passwordValidator(nextFormData.password))

        // save state
        setFormData(nextFormData)
    }


    // error states text
    const [loginEmailErrorText, setLoginEmailError] = useState('')
    const [loginPasswordErrorText, setLoginPasswordError] = useState('')
    const [generalError, setGeneralError] = useState('')


    // get readable error message from firebase login 
    // TODO: make it array and reduce 
    const setErrorMessages = (error) => {
        if (error === 'Firebase: Error (auth/invalid-email)') {
            setLoginEmailError('Invalid email')
        } else if (error === 'Firebase: Error (auth/wrong-password).') {
            setLoginPasswordError('Wrong Password ')
        } else if (error === 'Firebase: Error (auth/user-not-found).') {
            setGeneralError('User not found.')
        } else {
            setGeneralError('Error: ', error)
        }
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
        setGeneralError('')

        try {
            const firebaseResult = await firebaseSignIn(formData.email, formData.password)

            if (firebaseResult.error) {
                setErrorMessages(firebaseResult.error)
            } else {
                navigate('/home')
            }

        } catch (error) {
            console.error('!!! Firebase Auth Error! ', error.code)
            setErrorMessages(error)
        }

        setLoading(false)
    }

    return (
        <>
            <div
                className='fixed z-0 w-screen h-screen blur-sm brightness-50 hue-rotate-60 bg-cover bg-no-repeat bg-center'
                style={{ backgroundImage: `url(${pageLoginBackground})` }}></div>

            <div className="relative z-10 flex items-center justify-center h-screen flex-col page page-login">

                <h1 className="mb-6">Login</h1>

                <div className="p-6 bg-dark w-96 shadow-large rounded-xl">
                    {generalError &&
                        <p className="text-md text-center my-2 text-primary-400">{generalError}</p>
                    }

                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-8">
                            <label className="block text-sm mb-2" htmlFor="useremail">email</label>
                            <input
                                className="w-full py-3 px-3 leading-tight"
                                id="useremail"
                                name="email"
                                type="email"
                                disabled={loading}
                                placeholder="your email account"
                                value={formData.email}
                                onChange={onUpdateField}
                            />
                            <p className='text-xs text-primary'>{loginEmailErrorText}</p>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm mb-2" htmlFor="userpassword">password</label>
                            <input
                                className="w-full py-3 px-3 mb-3 leading-normal"
                                id="userpassword"
                                name="password"
                                type="password"
                                disabled={loading}
                                placeholder="your password"
                                value={formData.password}
                                onChange={onUpdateField}
                            />
                            <p className='text-xs text-primary'>{loginPasswordErrorText}</p>
                        </div>

                        <div className="mb-4">
                            <button
                                className={"button button-primary flex items-center justify-center w-full" + (loading ? " btn-loading" : " btn-normal")}
                                disabled={(canSubmit) ? "" : "disabled"}
                                type="submit"
                            >
                                <span className='mr-2'>
                                    {loading ? (<LoadingIcons.Oval strokeWidth={8} height={'1em'} />) : (<MdLogin />)}
                                </span>
                                <span>sign in</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-6 mb-0 text-center text-sm text-light-900 hover:text-light">
                    <NavLink to="/register">sign up</NavLink>
                </div>
            </div>
        </>
    )
}

export default PageLogin