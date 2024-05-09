'use client';
import React, {useState} from 'react';
import Image from "next/image";
import {validateForm} from "@/app/utils/validation";
import OrderForm from "@/app/components/form/OrderForm";

const TryNow = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        city: '',
        zip: ''
    });

    const [error, setError] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        console.log("Validation Errors:", errors);

        setError(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form submitted with data:", formData);
            alert('Form submitted successfully!');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                city: '',
                zip: ''
            });
        }
    };

    return (
        <section id='try'
                 className='mx-auto flex flex-col justify-between gap-20 px-6 py-10 pb-32 max-w-[1440px] sm:px-32 md:gap-20 lg:px-20 lg:py-20 xl:flex-row 3xl:px-0'>
            <div className='mx-auto flexCenter'>
                <Image src='/undraw_healthy_lifestyle_re_ifwg.svg' alt='Try now' width={500} height={500} className='drop-shadow-md' />
            </div>

            <OrderForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                error={error}
                setError={setError} />
        </section>
    );
};

export default TryNow;