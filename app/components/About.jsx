"use client"
import { FaStar, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from 'axios';
import { motion } from "framer-motion";
import ReviewCard from "@/app/components/common/ReviewCard";

const About = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://freetestapi.com/api/v1/users')
            .then(response => {
                const modifiedUsers = response.data.slice(0, 4).map(user => ({
                    ...user,
                    stars: 3 + Math.floor(Math.random() * 2)
                }));
                setUsers(modifiedUsers);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const Variants = {
        offscreen: {
            x: -100,
            opacity: 0,
        },
        onscreen: {
            x: 5,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const starsVariants = {
        hidden: {
            opacity: 0,
        },
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.3,
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 0.9,
            },
        },
    };

    return (
        <motion.div id='about'
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.5 }}
                    className='mx-auto flex flex-col gap-20 px-6 py-10 pb-32 max-w-[1440px] md:gap-20 lg:px-20 lg:py-20 xl:flex-row 3xl:px-0'>
            <div className="flex-1 md:row-start-1 md:flex md:flex-col md:items-center lg:row-start-1 lg:flex lg:flex-col lg:items-center">
                <h2 className="text-4xl font-semibold text-gray-700">Trusted by Thousands</h2>
                <p className="mt-2 mb-6 text-gray-600">Our customers love the difference we make!</p>
                <motion.div className="flex items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}>
                    <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                            <motion.div
                                key={index}
                                variants={starsVariants}
                                custom={index}
                            >
                                <FaStar/>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        className="ml-2 text-gray-600"
                        variants={textVariants}
                    >
                        4.8/5.0 from over 2,000 reviews
                    </motion.p>
                </motion.div>
            </div>
            <motion.div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:order-first lg:row-end-1"
                        variants={Variants}
            >
                {users.map(user => (
                    <ReviewCard key={user.id} name={user.name} review={user.review} stars={user.stars} />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default About;

