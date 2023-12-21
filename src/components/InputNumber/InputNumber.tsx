import { InputHTMLAttributes, forwardRef, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    errorsMessage?: string;
    classNameInput?: string;
    classNameError?: string;
    localValue: string;
    myMoney?: string;
    setLocalValue: React.Dispatch<React.SetStateAction<string>>;
    name: 'deposit' | 'withdraw';
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
    {
        className,
        errorsMessage,
        classNameInput = 'block w-full p-3 h-[40px] text-neutral_3 rounded-2xl bg-neutral_6 text-[16px] font-medium border-none outline-none',
        classNameError = 'mt-1 text-red-600 min-h-[1rem] text-sm',
        onChange,
        localValue,
        setLocalValue,
        value = '',
        myMoney = '0',
        name,
        ...rest
    },
    ref,
) {
    const { setValue } = useFormContext();
    const [prevValue, setPrevValue] = useState('');
    // let newNumber = useMemo(() => {
    //     return Number(localValue.replace(/,/g, ''));
    // }, [localValue]);
    // const handleChange = (event: any) => {
    //     const { value } = event.target;
    //     const _value = value.replace(/,/g, '');
    //     onChange && onChange(_value);

    //     // (/^(\d+\.?\d*|\.\d+)$/ || value === '') là để kiểm tra xem có phải là số nguyên, số thập phân hoặc "" không
    //     if (/^(\d+\.?\d*|\.\d+)$/.test(value.replace(/,/g, '')) || value === '') {
    //         if (value.replace(/,/g, '').length <= 9) {
    //             newNumber = Number(value.replace(/,/g, ''));
    //         }

    //         setValue(name, newNumber.toString());
    //         const formattedNumber = Number(newNumber).toLocaleString();
    //         if (value.slice(value.length - 1) === '.') {
    //             setLocalValue(`${formattedNumber}.`);
    //             return;
    //         } else {
    //             if (Number(value) <= 0) {
    //                 setLocalValue(value);
    //                 return;
    //             }
    //         }

    //         if (value === '') {
    //             setLocalValue('');
    //         } else {
    //             setLocalValue(formattedNumber);
    //         }
    //     }
    // };

    const handleChange = (event: any) => {
        const value = event.target.value.replace(/,/g, '');
        if (/^\d*\.?\d*$/.test(value) || value === '') {
            if (value.includes('.')) {
                const [integer, decimal]: [integer: string, decimal: string] = value.split('.');
                if (integer.length <= 9 && decimal.length <= 6) {
                    onChange && onChange(value);
                    setLocalValue(value);
                }
            } else {
                if (value.length <= 9) {
                    onChange && onChange(value);
                    setLocalValue(value);
                } else {
                    return prevValue;
                }
            }
        }
    };

    const calculatedValue = useMemo(() => {
        const _value = typeof value === 'undefined' ? localValue : String(value);
        if (_value === '') {
            return _value;
        }
        if (_value.includes('.')) {
            const [integer, decimal] = _value.split('.');
            if (integer.length <= 9 && decimal.length <= 6) {
                if (integer === '') {
                    setPrevValue(`.${decimal}`);
                    return `.${decimal}`;
                }
                setPrevValue(`${Number(integer).toLocaleString('en-US')}.${decimal}`);
                return `${Number(integer).toLocaleString('en-US')}.${decimal}`;
            }
            return prevValue;
        }
        if (_value.length <= 9) {
            setPrevValue(Number(_value).toLocaleString('en-US'));
            return Number(_value).toLocaleString('en-US');
        } else {
            return prevValue;
        }
    }, [localValue, value, prevValue, setPrevValue]);

    const handleSetMaxDeposit = () => {
        setValue(name, myMoney);
        setLocalValue(Number(myMoney).toLocaleString());
        setPrevValue(Number(myMoney).toLocaleString());
    };
    return (
        <div className={className}>
            <div className="relative">
                <input
                    type="text"
                    className={classNameInput}
                    {...rest}
                    value={calculatedValue}
                    onChange={handleChange}
                    ref={ref}
                />
                <button
                    type="button"
                    onClick={handleSetMaxDeposit}
                    className="absolute top-[50%] translate-y-[-50%] right-4 text-[14px] rounded-2xl text-accent_3 font-semibold bg-transparent"
                >
                    Max
                </button>
            </div>
            {/* <input type="text" className={classNameInput} value={localValue} onChange={handleChange} /> */}
            {errorsMessage && <div className={classNameError}>{errorsMessage}</div>}
        </div>
    );
});

export default InputNumber;
