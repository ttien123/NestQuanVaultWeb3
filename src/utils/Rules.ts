import * as yup from 'yup';

export const schema = yup.object({
    deposit: yup
        .string()
        .required('Amount is required')
        .test({
            name: 'value-not-allow',
            message: 'Amount must be at least 1 usdt',
            test: function (value) {
                if (Number(value) >= 1) {
                    return true;
                } else {
                    return false;
                }
            },
        }),

    withdraw: yup
        .string()
        .required('Amount is required')
        .test({
            name: 'value-not-allow',
            message: 'Amount must be greater than 0',
            test: function (value) {
                if (Number(value) > 0) {
                    return true;
                }
                return false;
            },
        }),
});

const handleConfirmPasswordYup = (refString: string) => {
    return yup
        .string()
        .required('Re-enter password is a required field')
        .min(8, 'Password must be at least 8 characters')
        .oneOf([yup.ref(refString)], 'Passwords must match');
};

export const authSchema = yup.object({
    username: yup.string().required('Username is a required field').min(4, 'Username must be at least 4 characters'),
    email: yup.string().required('Email is a required field').email('Email must be a valid email'),
    password: yup.string().required('Password is a required field').min(8, 'Password must be at least 8 characters'),
    confirm_password: handleConfirmPasswordYup('password'),
});

export type Schema = yup.InferType<typeof schema>;
export type AuthSchema = yup.InferType<typeof authSchema>;
