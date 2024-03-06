import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import BlogsImage from '../../public/INT0.5.jpg'
import profil from "../../public/PRpic.png";

const BlogCards = ({ title, description, time, link, thumbnail }) => {
    const [dynamicThumbnail, setDynamicThumbnail] = useState(null);

    useEffect(() => {
        const importThumbnail = async () => {
            try {
                // Dynamically import the image based on the thumbnail prop
                const dynamicImage = await import(`${thumbnail}`);
                setDynamicThumbnail(dynamicImage.default);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        importThumbnail();

    }, [thumbnail]);

    return (
        <>
            <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700 flex flex-col transition duration-300 hover:scale-105">
                <div className="flex justify-center w-full py-4">
                    {
                        thumbnail ? 
                            <Image
                                className="rounded-lg"
                                src={BlogsImage}
                                alt="test"
                                width={285}
                                height={200}
                         /> : null
                    }   
                </div>
                <div aria-hidden="true" className="relative px-5 py-2 flex items-center text-sm font-medium text-red-600 hover:cursor-pointer">
                    <p>Web development</p>
                </div>
                <h5 className="text-lg px-5 py-1 font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <div className="px-5 mt-2">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-[75px] overflow-y-auto">
                        {description}
                    </p>
                    <div aria-hidden="true" className="flex  mt-4 mb-4 flex items-center text-sm font-medium text-zinc-500 gap-4">
                            <p>{time}</p>
                            <p>5 minute read</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCards;
