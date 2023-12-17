import * as yup from 'yup';

export const schema = yup.object({
    deposit: yup
        .string()
        .required('email là bắt buộc')
        .email('Email không đúng định dạng')
        .min(1, 'Độ dài từ 5 - 160 ký tự')
        .max(160, 'Độ dài từ 5 - 160 ký tự'),
});

export type Schema = yup.InferType<typeof schema>;
