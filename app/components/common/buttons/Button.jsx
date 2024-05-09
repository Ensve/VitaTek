import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Button = ({type, title, icon, variant, border, href, full, click}) => {
    return (
        <Link href={href} passHref>
            <button
                type={type}
                onClick={click}
                className={`shadow-lg flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-white border-2
                           hover:bg-transparent transition duration-100 hover:text-gray-600 ${variant} ${border} ${full ? 'w-full' : ''}`}
            >
                {icon && <Image src={icon} alt={title} width={24} height={24} />}
                <span className='whitespace-nowrap font-medium'>{title}</span>
            </button>
        </Link>
    );
};

export default Button;
