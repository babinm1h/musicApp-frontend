import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/thunks/auth';
import { validate } from '../../utils/validate';
import FormControl from '../FormControl';

interface IFormFields {
    email: string
    password: string
}



const LoginForm = () => {
    const dispatch = useDispatch()
    const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormFields>()

    const onSubmit: SubmitHandler<IFormFields> = ({ email, password }) => {
        dispatch(loginThunk({ email, password }) as any)
    }

    return (
        <>
            <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
                <FormControl register={register("email", validate(5, 50))} id="email"
                    label="Your email" error={errors.email} type="email" />

                <FormControl register={register("password", validate(6, 50))} id="password"
                    label="Your password" error={errors.password} type="password" />

                <button className="bg-primaryGreen hover:bg-green-600 transition-colors px-10 font-bold h-[35px] rounded-lg text-lg">
                    Login
                </button>
            </form>

            <p className="mt-3">Dont have an account? <Link href="/registration">
                <span className="text-primaryGreen hover:underline cursor-pointer">
                    Registration
                </span>
            </Link>
            </p>
        </>
    );
};

export default LoginForm;