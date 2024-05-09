import React from 'react';
import { motion } from "framer-motion";

const Hamburger = ({ nav }) => {
    const topVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: "rgb(21,21,21)" }
    };

    const centerVariants = {
        closed: { opacity: 1 },
        opened: { opacity: 0 }
    };

    const bottomVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: "black" }
    };

    return (
        <button className="flex h-6 w-7 flex-col justify-between bg-none lg:hidden">
            <motion.div
                variants={topVariants}
                animate={nav ? "opened" : "closed"}
                className="h-1 w-7 origin-left rounded bg-black"
            ></motion.div>
            <motion.div
                variants={centerVariants}
                animate={nav ? "opened" : "closed"}
                className="h-1 w-7 rounded bg-black"
            ></motion.div>
            <motion.div
                variants={bottomVariants}
                animate={nav ? "opened" : "closed"}
                className="h-1 w-7 origin-left rounded bg-black"
            ></motion.div>
        </button>
    );
};

export default Hamburger;
