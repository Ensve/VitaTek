import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://www.linkedin.com/in/endre-svendsen-8b831b233" className="text-gray-700 hover:text-green-600 easeTransition">
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin className="w-6 h-6"/>
                    </a>
                    <a href="https://github.com/Ensve" className="text-gray-700 hover:text-green-600 easeTransition">
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="w-6 h-6"/>
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-600 easeTransition">
                    © 2024 Endre Svendsen. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;