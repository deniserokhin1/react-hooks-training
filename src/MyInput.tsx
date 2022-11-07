import React from 'react';
import { useInput } from './hooks/useInput';

const MyInput = () => {
    const {bind, reset, value} = useInput('')
    console.log(value);
    return (
        <div>
            <input {...bind} type="text" />
        </div>
    );
};

export default MyInput;