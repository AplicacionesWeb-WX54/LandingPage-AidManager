import './GetStarted.css';
import AidLogoLogin from '../../assets/aidLogo-login.png'
import { FacebookIcon } from './FacebookIcon';
import { GoogleIcon } from './GoogleIcon';
import { useState } from 'react';
import ArrowIcon from '../../assets/icon-arrow.svg';
import { Link } from 'react-router-dom';

export const GetStarted = () => {

    const [isGoogleHovered, setIsGoogleHovered] = useState(false);
    const [isFacebookHovered, setIsFacebookHovered] = useState(false);
    const [hasRegister, setHasRegister] = useState(false);

    return (
        <section className='h-screen w-full relative'>
            <div className='z-50' style={{ position: 'fixed', top: '0', left: '0' }}>
                <Link to="/">
                    <div className='return-home flex flex-row gap-2 items-center p-2.5'>
                        <div className='bg-green-900 p-1 rounded-full'>
                            <img className='w-3 h-3 rounded-full' src={ArrowIcon} />
                        </div>
                        <p className='text-xl font-medium tracking-wide mb-0.5 text-white'>Return to home</p>
                    </div>
                </Link>
            </div>
            <div className='h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-1 text-slate-50'>
                <div className='h-full w-full hero hidden lg:block'>
                </div>
                <div className='h-full bg-stone-800 flex flex-col gap-5 justify-center'>
                    <section className='left flex flex-col w-11/12 max-w-[600px] mx-auto gap-8'>
                        <h1 className='mb-2 text-green-700 font-medium text-center text-5xl font-lora tracking-wide'>Welcome to</h1>
                        <div className='flex flex-col justify-center w-full mb-5 px-10'>
                            <img className='w-full h-full' src={AidLogoLogin}></img>
                        </div>
                        {
                            hasRegister ? (
                                <form className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='font-medium tracking-wide'>Nombre:</label>
                                        <input
                                            className='py-2 indent-3 rounded-sm bg-slate-200 text-slate-900'
                                            type='text' placeholder='Insert your name'>
                                        </input>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='font-medium tracking-wide'>Email:</label>
                                        <input
                                            className='py-2 indent-3 rounded-sm bg-slate-200 text-slate-900'
                                            type='email' placeholder='Nekosoap@nekito.com'>
                                        </input>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='font-medium tracking-wide'>Password:</label>
                                        <input
                                            className='py-2 indent-3 rounded-sm bg-slate-200 text-slate-900'
                                            type='password' placeholder='Insert a password'>
                                        </input>
                                    </div>
                                    <button className='bg-green-800 botoncito font-medium uppercase 
                                py-2.5 mt-4'>
                                        Create an account
                                    </button>
                                </form>
                            ) :
                                (
                                    <form className='flex flex-col gap-6'>
                                        <div className='flex flex-col gap-2'>
                                            <label className='font-medium tracking-wide'>Email:</label>
                                            <input
                                                className='py-2 indent-3 rounded-sm bg-slate-200 text-slate-900'
                                                type='text' placeholder='Insert your name'>
                                            </input>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label className='font-medium tracking-wide'>Password:</label>
                                            <input
                                                className='py-2 indent-3 rounded-sm bg-slate-200 text-slate-900'
                                                type='password' placeholder='Insert a password'>
                                            </input>
                                        </div>
                                        <a className='flex items-stretch w-full' href="https://aid-manager-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            <button className='h-full w-full inline bg-green-800 botoncito font-medium uppercase py-4'>
                                                Go to Application
                                            </button>
                                        </a>
                                    </form>
                                )
                        }
                        <div className='flex flex-col items-center gap-3.5 mt-2'>
                            <h2 className='register font-medium tracking-wide'>{hasRegister ? "Register with" : "Sign in with"}</h2>
                            <div className='flex flex-row w-full gap-3'>
                                <div
                                    className='flex flex-row items-center justify-center cursor-pointer
                                        gap-2 border border-slate-200 flex-1 py-2 rounded-md
                                        hover:bg-slate-100 transition-all duration-200 ease
                                        hover:text-slate-950'
                                    onMouseEnter={() => setIsGoogleHovered(true)}
                                    onMouseLeave={() => setIsGoogleHovered(false)}
                                >
                                    <GoogleIcon hover={isGoogleHovered}></GoogleIcon>
                                    <p>Google</p>
                                </div>
                                <div
                                    className='flex flex-row items-center justify-center cursor-pointer
                                        border-slate-200 gap-2 border flex-1 py-2 rounded-md
                                        hover:bg-slate-100 transition-all duration-200 ease-in
                                        hover:text-slate-950'
                                    onMouseEnter={() => setIsFacebookHovered(true)}
                                    onMouseLeave={() => setIsFacebookHovered(false)}
                                >
                                    <FacebookIcon hover={isFacebookHovered}></FacebookIcon>
                                    <p>Facebook</p>
                                </div>
                            </div>
                            <p className='sign mt-6 text-slate-300 text-center'>{hasRegister ? 'Do you have a account?' : `Do you don't have a account?`}
                                <a
                                    onClick={() => setHasRegister(!hasRegister)}
                                    className='text-white font-medium tracking-wide cursor-pointer'>
                                    {hasRegister ? ' Sign in' : ' Register'}
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
