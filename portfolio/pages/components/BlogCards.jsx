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
                <div className="flex justify-between">
                    <div className="flex px-5 py-4">
                        <div>
                            <Image
                                className="rounded-full max-w-none"
                                src={profil}
                                alt=""
                                width={35}
                                height={35}
                            />
                        </div>
                        <div className="flex flex-col ml-5 text-xs">
                            <div className="inline-block font-bold dark:text-white">Tony Bui</div>
                            <div className="text-slate-500 dark:text-slate-400">{time}</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    {
                        thumbnail ? 
                            <Image
                                className="rounded-lg"
                                src={BlogsImage}
                                alt="test"
                                width={275}
                                height={200}
                         /> : null
                    }   
                </div>
                <h5 className="mt-2 text-lg px-6 py-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <hr className="h-px mx-auto my-2 w-3/4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="px-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    <div aria-hidden="true" className="relative mt-4 mb-4 flex items-center text-sm font-medium text-sky-300 underline hover:cursor-pointer">
                        <Link href={`/Blog/${link}`}>
                            <p>Read full blog</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BlogCards;
