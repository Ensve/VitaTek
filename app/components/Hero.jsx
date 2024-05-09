import React from 'react';
import Button from "@/app/components/common/buttons/Button";
import Image from "next/image";

const Hero = () => {

    const blurEffectStyles = {
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
    };

    return (
        <section id='home' className='relative mx-auto flex flex-col gap-20 border-b-2 px-6 py-10 pb-32 h-[75vh] max-w-[1440px] md:gap-20 lg:px-20 lg:py-20 xl:flex-row 3xl:px-0'>
                <Image
                    src='/VitaTe.webp'
                    alt='Elevate Your Health with Precision Science'
                    layout='fill'
                    objectFit='cover'
                    className='fade-in-animation absolute inset-0 h-auto w-full translate-x-1/3 overflow-hidden blur-xd'
                    style={blurEffectStyles}
                />
            <div className='relative flex flex-1 flex-col xl:w-1/2'>
                <h1 className='py-4 text-gray-700 xl:max-w-[70%]'>Elevate Your Health with Precision Science</h1>
                <p className='py-4 text-gray-700 font-medium xl:max-w-[520px]'>Explore the purity of nature fused with scientific rigor at ViteTek. Begin your journey to enhanced well-being today.</p>
                <div className="flex w-full flex-col gap-3 py-4 sm:flex-row">
                    <Button title="Try for free" href="#try" variant='bg-green-600' border='border-green-600' full/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
