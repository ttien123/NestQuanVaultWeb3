import { motion } from 'framer-motion';
import MenuStep from '../MenuStep';
import vector3 from 'src/assets/images/home/vector3.png';
import vector4 from 'src/assets/images/home/vector4.png';
import NumberCircle from 'src/components/NumberCircle';

export interface PropsMenuStep {
    icon: React.ReactElement;
    nameStep: string;
    description: string;
}
const Modeling = () => {
    const menuStep: PropsMenuStep[] = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10.9696 5.94639C11.1317 6.49479 11.431 6.98429 11.8279 7.37509L9.03039 9.05357C8.8683 8.50517 8.56895 8.01568 8.17212 7.62488L10.9696 5.94639Z"
                        fill="#FED834"
                    />
                    <path
                        d="M8.17212 12.3751L10.9696 14.0536C11.1317 13.5052 11.431 13.0157 11.8279 12.6249L9.03039 10.9464C8.8683 11.4948 8.56895 11.9843 8.17212 12.3751Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 6.66667C15.0871 6.66667 15.8333 5.92047 15.8333 5C15.8333 4.07952 15.0871 3.33333 14.1666 3.33333C13.2461 3.33333 12.4999 4.07952 12.4999 5C12.4999 5.92047 13.2461 6.66667 14.1666 6.66667ZM17.4999 5C17.4999 6.84095 16.0075 8.33333 14.1666 8.33333C12.3256 8.33333 10.8333 6.84095 10.8333 5C10.8333 3.15905 12.3256 1.66667 14.1666 1.66667C16.0075 1.66667 17.4999 3.15905 17.4999 5Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 16.6667C15.0871 16.6667 15.8333 15.9205 15.8333 15C15.8333 14.0795 15.0871 13.3333 14.1666 13.3333C13.2461 13.3333 12.4999 14.0795 12.4999 15C12.4999 15.9205 13.2461 16.6667 14.1666 16.6667ZM17.4999 15C17.4999 16.841 16.0075 18.3333 14.1666 18.3333C12.3256 18.3333 10.8333 16.841 10.8333 15C10.8333 13.1591 12.3256 11.6667 14.1666 11.6667C16.0075 11.6667 17.4999 13.1591 17.4999 15Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83333 11.6667C6.75381 11.6667 7.5 10.9205 7.5 10C7.5 9.07952 6.75381 8.33333 5.83333 8.33333C4.91286 8.33333 4.16667 9.07952 4.16667 10C4.16667 10.9205 4.91286 11.6667 5.83333 11.6667ZM9.16667 10C9.16667 11.8409 7.67428 13.3333 5.83333 13.3333C3.99238 13.3333 2.5 11.8409 2.5 10C2.5 8.15905 3.99238 6.66667 5.83333 6.66667C7.67428 6.66667 9.16667 8.15905 9.16667 10Z"
                        fill="#FED834"
                    />
                </svg>
            ),
            nameStep: 'Feature engineering',
            description:
                'Carefully crafting features that provide relevant insights aligns with the desired objectives and mindset of your chosen tournament can boost your model’s performance.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10.9696 5.94639C11.1317 6.49479 11.431 6.98429 11.8279 7.37509L9.03039 9.05357C8.8683 8.50517 8.56895 8.01568 8.17212 7.62488L10.9696 5.94639Z"
                        fill="#FED834"
                    />
                    <path
                        d="M8.17212 12.3751L10.9696 14.0536C11.1317 13.5052 11.431 13.0157 11.8279 12.6249L9.03039 10.9464C8.8683 11.4948 8.56895 11.9843 8.17212 12.3751Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 6.66667C15.0871 6.66667 15.8333 5.92047 15.8333 5C15.8333 4.07952 15.0871 3.33333 14.1666 3.33333C13.2461 3.33333 12.4999 4.07952 12.4999 5C12.4999 5.92047 13.2461 6.66667 14.1666 6.66667ZM17.4999 5C17.4999 6.84095 16.0075 8.33333 14.1666 8.33333C12.3256 8.33333 10.8333 6.84095 10.8333 5C10.8333 3.15905 12.3256 1.66667 14.1666 1.66667C16.0075 1.66667 17.4999 3.15905 17.4999 5Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 16.6667C15.0871 16.6667 15.8333 15.9205 15.8333 15C15.8333 14.0795 15.0871 13.3333 14.1666 13.3333C13.2461 13.3333 12.4999 14.0795 12.4999 15C12.4999 15.9205 13.2461 16.6667 14.1666 16.6667ZM17.4999 15C17.4999 16.841 16.0075 18.3333 14.1666 18.3333C12.3256 18.3333 10.8333 16.841 10.8333 15C10.8333 13.1591 12.3256 11.6667 14.1666 11.6667C16.0075 11.6667 17.4999 13.1591 17.4999 15Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83333 11.6667C6.75381 11.6667 7.5 10.9205 7.5 10C7.5 9.07952 6.75381 8.33333 5.83333 8.33333C4.91286 8.33333 4.16667 9.07952 4.16667 10C4.16667 10.9205 4.91286 11.6667 5.83333 11.6667ZM9.16667 10C9.16667 11.8409 7.67428 13.3333 5.83333 13.3333C3.99238 13.3333 2.5 11.8409 2.5 10C2.5 8.15905 3.99238 6.66667 5.83333 6.66667C7.67428 6.66667 9.16667 8.15905 9.16667 10Z"
                        fill="#FED834"
                    />
                </svg>
            ),
            nameStep: 'Build models',
            description: 'Be creative and create your own perfect models.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10.9696 5.94639C11.1317 6.49479 11.431 6.98429 11.8279 7.37509L9.03039 9.05357C8.8683 8.50517 8.56895 8.01568 8.17212 7.62488L10.9696 5.94639Z"
                        fill="#FED834"
                    />
                    <path
                        d="M8.17212 12.3751L10.9696 14.0536C11.1317 13.5052 11.431 13.0157 11.8279 12.6249L9.03039 10.9464C8.8683 11.4948 8.56895 11.9843 8.17212 12.3751Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 6.66667C15.0871 6.66667 15.8333 5.92047 15.8333 5C15.8333 4.07952 15.0871 3.33333 14.1666 3.33333C13.2461 3.33333 12.4999 4.07952 12.4999 5C12.4999 5.92047 13.2461 6.66667 14.1666 6.66667ZM17.4999 5C17.4999 6.84095 16.0075 8.33333 14.1666 8.33333C12.3256 8.33333 10.8333 6.84095 10.8333 5C10.8333 3.15905 12.3256 1.66667 14.1666 1.66667C16.0075 1.66667 17.4999 3.15905 17.4999 5Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 16.6667C15.0871 16.6667 15.8333 15.9205 15.8333 15C15.8333 14.0795 15.0871 13.3333 14.1666 13.3333C13.2461 13.3333 12.4999 14.0795 12.4999 15C12.4999 15.9205 13.2461 16.6667 14.1666 16.6667ZM17.4999 15C17.4999 16.841 16.0075 18.3333 14.1666 18.3333C12.3256 18.3333 10.8333 16.841 10.8333 15C10.8333 13.1591 12.3256 11.6667 14.1666 11.6667C16.0075 11.6667 17.4999 13.1591 17.4999 15Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83333 11.6667C6.75381 11.6667 7.5 10.9205 7.5 10C7.5 9.07952 6.75381 8.33333 5.83333 8.33333C4.91286 8.33333 4.16667 9.07952 4.16667 10C4.16667 10.9205 4.91286 11.6667 5.83333 11.6667ZM9.16667 10C9.16667 11.8409 7.67428 13.3333 5.83333 13.3333C3.99238 13.3333 2.5 11.8409 2.5 10C2.5 8.15905 3.99238 6.66667 5.83333 6.66667C7.67428 6.66667 9.16667 8.15905 9.16667 10Z"
                        fill="#FED834"
                    />
                </svg>
            ),
            nameStep: 'Refine models',
            description:
                'Moreover, you can create multiple models and define multiple training strategies to optimize model performance. Once you have evaluated and compared the performance of different models, you can select the one that best fits your needs and proceed to the next.',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10.9696 5.94639C11.1317 6.49479 11.431 6.98429 11.8279 7.37509L9.03039 9.05357C8.8683 8.50517 8.56895 8.01568 8.17212 7.62488L10.9696 5.94639Z"
                        fill="#FED834"
                    />
                    <path
                        d="M8.17212 12.3751L10.9696 14.0536C11.1317 13.5052 11.431 13.0157 11.8279 12.6249L9.03039 10.9464C8.8683 11.4948 8.56895 11.9843 8.17212 12.3751Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 6.66667C15.0871 6.66667 15.8333 5.92047 15.8333 5C15.8333 4.07952 15.0871 3.33333 14.1666 3.33333C13.2461 3.33333 12.4999 4.07952 12.4999 5C12.4999 5.92047 13.2461 6.66667 14.1666 6.66667ZM17.4999 5C17.4999 6.84095 16.0075 8.33333 14.1666 8.33333C12.3256 8.33333 10.8333 6.84095 10.8333 5C10.8333 3.15905 12.3256 1.66667 14.1666 1.66667C16.0075 1.66667 17.4999 3.15905 17.4999 5Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1666 16.6667C15.0871 16.6667 15.8333 15.9205 15.8333 15C15.8333 14.0795 15.0871 13.3333 14.1666 13.3333C13.2461 13.3333 12.4999 14.0795 12.4999 15C12.4999 15.9205 13.2461 16.6667 14.1666 16.6667ZM17.4999 15C17.4999 16.841 16.0075 18.3333 14.1666 18.3333C12.3256 18.3333 10.8333 16.841 10.8333 15C10.8333 13.1591 12.3256 11.6667 14.1666 11.6667C16.0075 11.6667 17.4999 13.1591 17.4999 15Z"
                        fill="#FED834"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83333 11.6667C6.75381 11.6667 7.5 10.9205 7.5 10C7.5 9.07952 6.75381 8.33333 5.83333 8.33333C4.91286 8.33333 4.16667 9.07952 4.16667 10C4.16667 10.9205 4.91286 11.6667 5.83333 11.6667ZM9.16667 10C9.16667 11.8409 7.67428 13.3333 5.83333 13.3333C3.99238 13.3333 2.5 11.8409 2.5 10C2.5 8.15905 3.99238 6.66667 5.83333 6.66667C7.67428 6.66667 9.16667 8.15905 9.16667 10Z"
                        fill="#FED834"
                    />
                </svg>
            ),
            nameStep: 'Assess your models',
            description:
                'It is recommended to use our scoring-based performance assessment method to evaluate your machine learning model. This will enable you to understand how your model performs based on specific metrics and to develop an appropriate evaluation method that suits your needs.',
        },
    ];
    return (
        <div className="grid grid-cols-12 mt-[520px] lg:mt-[650px] relative">
            <motion.div
                className="col-span-9 lg:col-span-6 order-2 mt-[100px]"
                initial={{
                    x: '100%',
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.75,
                }}
            >
                <MenuStep
                    heading={'Modeling'}
                    bgLine={'bg-[#FED834]'}
                    menuStep={menuStep}
                    borderIcon="border-[#FED834]"
                    extendsDescription="border-[#7B6A22] bg-[#423D29]"
                />
            </motion.div>
            <div className="col-span-3 lg:col-span-6 order-1">
                <NumberCircle
                    extendsClassName="md:translate-x-[120px] lg:translate-x-[-150px] lg:translate-y-0 xl:translate-x-[-50px] xl:translate-y-[-12px] translate-y-[-12px] mx-0 border-[#FED834] bg-[#423D29]"
                    number="02"
                    textColor="text-[#FED834]"
                />
            </div>
            <div className="absolute top-[70px] lg:top-[150px] lg:left-[0px] xl:left-[120px]">
                <img src={vector3} alt="vector" className="hidden lg:block ml-auto" />
                <img src={vector4} alt="vector" className="lg:hidden translate-x-2 md:translate-x-[160px]" />
                <div className="translate-x-[-5px] md:translate-x-[150px] lg:translate-x-[-30px] translate-y-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={19}
                        viewBox="0 0 28 19"
                        fill="none"
                        className="ml-auto"
                    >
                        <path
                            d="M15.557 17.4636C14.7818 18.3749 13.3852 18.4062 12.5699 17.5306L0.717686 4.80125C-0.458707 3.5378 0.410692 1.47758 2.13659 1.43887L25.2584 0.920301C26.9843 0.881594 27.9452 2.90077 26.8266 4.21569L15.557 17.4636Z"
                            fill="#677B9A"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Modeling;
