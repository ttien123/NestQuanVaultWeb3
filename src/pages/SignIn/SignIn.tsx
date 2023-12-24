import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import path from 'src/constants/path';
import { AuthSchema, authSchema } from 'src/utils/Rules';

export type FormData = Pick<AuthSchema, 'username' | 'password'>;
const loginSchema = authSchema.pick(['username', 'password']);

const SignIn = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(loginSchema),
    });
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });
    return (
        <div>
            <form className="mt-[40px]" onSubmit={onSubmit} noValidate>
                <div className="flex flex-col">
                    <Input
                        name="username"
                        type="text"
                        register={register}
                        errorsMessage={errors.username?.message}
                        placeholder="Enter your username"
                        labelName="Username"
                        className="w-full "
                        classNameInput="h-[40px] block w-full px-3 py-[10px] bg-neutral_6 rounded-[16px] border-none outline-none"
                    />

                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter your password (+8 characters)"
                        errorsMessage={errors.password?.message}
                        register={register}
                        labelName="Password"
                        className="w-full "
                        classNameInput="h-[40px] block w-full px-3 py-[10px] bg-neutral_6 rounded-[16px] border-none outline-none"
                    />
                </div>

                <Button type="submit" extendsClassName="block w-full mt-4">
                    Sign In
                </Button>
                <Button isNormal extendsClassName="block bg-[#3c506f] w-full mt-8">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                            <g clipPath="url(#clip0_5078_7074)">
                                <path
                                    d="M19.7874 10.7247C19.7874 10.0663 19.7291 9.44134 19.6291 8.83301H10.2124V12.5913H15.6041C15.3624 13.8247 14.6541 14.8663 13.6041 15.5747V18.0747H16.8207C18.7041 16.333 19.7874 13.7663 19.7874 10.7247Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M10.2124 20.4999C12.9124 20.4999 15.1707 19.5999 16.8207 18.0749L13.604 15.5749C12.704 16.1749 11.5624 16.5415 10.2124 16.5415C7.60402 16.5415 5.39569 14.7832 4.60402 12.4082H1.28735V14.9832C2.92902 18.2499 6.30402 20.4999 10.2124 20.4999Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M4.60407 12.4083C4.39574 11.8083 4.2874 11.1666 4.2874 10.4999C4.2874 9.83327 4.40407 9.1916 4.60407 8.5916V6.0166H1.2874C0.604068 7.3666 0.212402 8.88327 0.212402 10.4999C0.212402 12.1166 0.604068 13.6333 1.2874 14.9833L4.60407 12.4083Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M10.2124 4.45833C11.6874 4.45833 13.004 4.96667 14.0457 5.95834L16.8957 3.10833C15.1707 1.49167 12.9124 0.5 10.2124 0.5C6.30402 0.5 2.92902 2.75 1.28735 6.01667L4.60402 8.59167C5.39569 6.21667 7.60402 4.45833 10.2124 4.45833Z"
                                    fill="#EA4335"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_5078_7074">
                                    <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="ml-2">Sign in with Google</span>
                </Button>
            </form>
            <div className="mt-6 text-center">
                Don't have account?
                <Link
                    className="ml-1 text-[#0a5dc2] hover:underline hover:text-[#0a5dc2] hover:opacity-60 text-[16px] font-medium"
                    to={path.signUp}
                >
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default SignIn;
