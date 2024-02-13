import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import gifnetflix from './NetflixDemo.gif'
import netflixDetails from '../public/NetflixDetails.png'

const Netflix = () => {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-none' layout='fill' src={netflixDetails} alt='/' unoptimized={true} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                    <h2 className='py-2'>Netflix UI clone</h2>
                    <h3>React JS / Tailwind / Firebase</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Projets</p>
                    <h2>Aperçu</h2>
                    <p className='mt-4'>L'interface utilisateur NetflixUI clone est une application facile à utiliser qui offre une expérience conviviale pour les utilisateurs qui souhaitent gérer leurs favoris. Il est possible de se connecter à l'application avec un compte utilisateur existant ou de créer un nouveau compte. Une fois connecté, l'utilisateur peut facilement ajouter ou enlever des films à ses favoris et naviguer à travers les différentes catégories de films disponibles. L'application est ergonomique et intuitive, et permet à l'utilisateur de sélectionner des films facilement et rapidement.
                    </p>
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
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Tailwind</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Firebase (Auth)</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Firestore</p>
                        <a href="https://www.themoviedb.org/documentation/api"><p className='text-gray-700 py-2 flex items-center underline underline-offset-2'><RiRadioButtonFill /> themoviestore, API</p></a>
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center rounded-lg bg-slate-300mt-14 align-bottom overflow-x-hidden text-center overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-36"
                    >
                        <div className=" relative bg-slate-100 rounded-lg w-auto my-6 mx-auto max-w-3xl text-center shadow-xl shadow-gray-400">
                            {/*content*/}
                            <div className="border-0 rounded-lg relative flex flex-col w-full shadow-xl outline-none text-center focus:outline-none">
                                {/*body*/}
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black mt-4">Démonstration</h2>
                                <div className=" px-2 mt-2 rounded-lg border-">

                                    <Image className='text-center' src={gifnetflix} alt='/' />
                                </div>
                                {/*footer*/}
                                <button
                                    className="text-red-500  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-4"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <Link href='/#projects'>
                <p className='text-center text-gray-700 py-4 mt-24 cursor-pointer underline underline-offset-2'>Retour au projets</p>
            </Link>
        </div>
    )
}

export default Netflix