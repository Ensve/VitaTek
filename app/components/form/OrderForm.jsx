'use client';
import React from 'react';
import Button from "@/app/components/common/buttons/Button";

const OrderForm = ({ formData, setFormData, handleSubmit, error }) => {
    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const getFieldClassName = (fieldName) =>
        `block w-full appearance-none rounded-lg border px-4 py-3 
        leading-tight focus:outline-none ${
            error[fieldName] ? 'border-red-500 bg-gray-200' : 'border-gray-200 bg-gray-200 focus:border-gray-500'
        }`;

    return (
        <form className="w-full max-w-lg">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-700">Experience the Benefits for Free!</h2>
                <p className="text-gray-600">Sign up today and try our premium health products free for one month. Discover the difference with no risk!</p>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">First Name</label>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInput}
                        className={getFieldClassName('firstName')}
                        type="text"
                        placeholder="Ola"
                    />
                    {error?.firstName && <p className="mt-3 text-xs italic text-red-500">{error.firstName}</p>}
                </div>
                <div className="w-full px-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Last Name</label>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInput}
                        className={getFieldClassName('lastName')}
                        type="text"
                        placeholder="Nordmann"
                    />
                    {error?.lastName && <p className="mt-3 text-xs italic text-red-500">{error.lastName}</p>}
                </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="w-full px-3">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        className={getFieldClassName('email')}
                        type="email"
                        placeholder="ola@nordmann.no"
                    />
                    {error?.email && <p className="mt-3 text-xs italic text-red-500">{error.email}</p>}
                </div>
            </div>
            <div className="-mx-3 mb-2 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Country</label>
                    <input
                        name="country"
                        value={formData.country}
                        onChange={handleInput}
                        className={getFieldClassName('address')}
                        type="text"
                        placeholder="eg. Norway"
                    />
                </div>
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">City</label>
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleInput}
                        className={getFieldClassName('address')}
                        type="text"
                        placeholder="eg. Oslo"
                    />
                </div>
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">Zip</label>
                    <input
                        name="zip"
                        value={formData.zip}
                        onChange={handleInput}
                        className={getFieldClassName('address')}
                        type="text"
                        placeholder="eg. 0255"
                    />
                </div>
            </div>
                {error?.address && <p className="mt-3 text-xs italic text-red-500">{error.address}</p>}
            <div className="flex w-full flex-col gap-3 py-4 sm:flex-row">
                <Button click={handleSubmit} title="Try for free" href="/" variant='bg-green-600' border='border-green-600' full />
            </div>
        </form>
    );
};

export default OrderForm;
