import React from "react";
import Image from "next/image";
import podcasts from "../public/podcasts.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import gif from "../public/ex05c.gif";

const Podcasts = () => {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-none' layout='fill' src={podcasts} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                    <h2 className='py-2'>Podcasts Application</h2>
                    <h3>React JS / Bulma / Node JS</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Projects</p>
                    <h2>Overview</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className='px-8 py-2 mt-4 mr-8'
                        onClick={() => setShowModal(true)}>Demo</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Javascript</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> React</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Bulma</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> NodeJS</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> API (json)</p>
                    </div>
                </div>

            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center mt-14 align-bottom overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                                {/*body*/}
                                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-4">Demonstration</h2>
                                <div class=" px-2 mt-2 rounded-lg border-">

                                    <Image src={gif} alt='/' />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <Link href='/#projects'>
                <p className='text-center text-gray-700 py-4 mt-24 cursor-pointer'>Back to Projects</p>
            </Link>
        </div>
    )
}

export default Podcasts