import React from 'react';
import {FaRegStar, FaStar} from "react-icons/fa";

const ReviewCard = ({name, review, stars}) => {

    const renderStars = (count) => {
        return [...Array(count)].map((_, index) => <FaStar key={index} />).concat(
            [...Array(5 - count)].map((_, index) => <FaRegStar key={index + 5} />)
        );
    };

    return (
        <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <div className="h-7 w-7 rounded-full bg-red-500 text-center">{name[0]}</div>
                    <span>{name}</span>
                </div>
                <div className="flex gap-1 p-1 text-yellow-500">
                    {renderStars(stars)}
                </div>
            </div>

            <div>
                {review}
            </div>

            <div className="flex justify-between">
                <span>Feb 13, 2021</span>
            </div>
        </div>
    );
};

export default ReviewCard;