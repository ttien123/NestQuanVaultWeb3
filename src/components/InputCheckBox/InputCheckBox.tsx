import React, { useRef } from 'react';

interface Props {
    onChange?: (checked: boolean) => void;
    isChecked?: boolean;
    classNameError?: string;
    errorsMessage?: string;
    name?: string;
    setErrorsMessage: React.Dispatch<React.SetStateAction<string>>;
}
const InputCheckBox = ({
    onChange,
    name,
    isChecked,
    errorsMessage,
    classNameError = 'mt-1 text-red-600 min-h-[1rem] text-sm',
    setErrorsMessage,
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleToggle = () => {
        inputRef.current?.click();
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isChecked) {
            setErrorsMessage('You must agree to sign up!');
        } else {
            setErrorsMessage('');
        }
        onChange && onChange(e.target.checked);
    };
    return (
        <div>
            <div className="flex items-center justify-start">
                {isChecked ? (
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="bg-primary_1 w-[18px] h-[18px] flex items-center justify-center rounded-md "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 12 13" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L6.06066 8.64645C5.47487 9.23223 4.52513 9.23223 3.93934 8.64645L2.14645 6.85355C1.95118 6.65829 1.95118 6.34171 2.14645 6.14645C2.34171 5.95118 2.65829 5.95118 2.85355 6.14645L4.64645 7.93934C4.84171 8.1346 5.15829 8.1346 5.35355 7.93934L9.64645 3.64645C9.84171 3.45118 10.1583 3.45118 10.3536 3.64645Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                ) : (
                    <button type="button" className="w-[18px] h-[18px] block" onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 19" fill="none">
                            <rect y="0.5" width={18} height={18} rx={6} fill="#455066" />
                        </svg>
                    </button>
                )}
                <button type="button" onClick={handleToggle} className="ml-2">
                    I agree to Nestquant Terms and Privacy policy
                </button>

                <input type="checkbox" name={name} ref={inputRef} className="hidden" onChange={handleChange} />
            </div>
            <div className={classNameError}>{errorsMessage}</div>
        </div>
    );
};

export default InputCheckBox;
