import React, { useState } from 'react'
import Phone from './Phone/Phone'
import Email from './Email/Email'

const phoneEmailMap = {
    phone: Phone,
    email: Email
};

const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];

    function onNext() {}

    return (
        <>
            <button onClick={() => setType('phone')}>Phone</button>
            <button onClick={() => setType('email')}>Email</button>
            <Component onNext={onNext} />
        </>
        
    )
}

export default StepPhoneEmail


