import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import InputCheckBox from 'src/components/InputCheckBox';
import path from 'src/constants/path';
import { AuthSchema, authSchema } from 'src/utils/Rules';

export type FormData = Pick<AuthSchema, 'username' | 'email' | 'password' | 'confirm_password'>;
const registerSchema = authSchema.pick(['username', 'email', 'password', 'confirm_password']);

const SignUp = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState('');

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        resolver: yupResolver(registerSchema),
    });

    const handleChangeInput = (checked: boolean) => {
        setIsChecked(checked);
    };

    const onSubmit = handleSubmit((data) => {
        if (isChecked) {
            console.log(data);
            reset();
            setIsChecked(false);
            setErrorsMessage('');
        } else {
            setErrorsMessage('You must agree to sign up!');
        }
    });

    const handleClick = () => {
        setErrorsMessage('You must agree to sign up!');
    };

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
                        name="email"
                        type="email"
                        errorsMessage={errors.email?.message}
                        register={register}
                        placeholder="Enter your email"
                        labelName="Email"
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
                    <Input
                        name="confirm_password"
                        type="password"
                        register={register}
                        errorsMessage={errors.confirm_password?.message}
                        placeholder="Enter your password again (+8 characters)"
                        labelName="Re-enter password"
                        className="w-full "
                        classNameInput="h-[40px] block w-full px-3 py-[10px] bg-neutral_6 rounded-[16px] border-none outline-none"
                    />
                </div>
                <div className="mt-1 mb-2 flex items-center justify-start">
                    <InputCheckBox
                        name="term"
                        onChange={handleChangeInput}
                        isChecked={isChecked}
                        errorsMessage={errorsMessage}
                        setErrorsMessage={setErrorsMessage}
                    />
                </div>
                <Button type="submit" onClick={handleClick} extendsClassName="block w-full">
                    Sign Up
                </Button>
            </form>
            <div className="mt-6 text-center">
                Already have an account?
                <Link
                    className="ml-1 text-[#0a5dc2] hover:underline hover:text-[#0a5dc2] hover:opacity-60 text-[16px] font-medium"
                    to={path.signIn}
                >
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
