import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import ViPng from "../public/Vi.png";
import Vigif from "./ViDemo.gif";

const Vi = () => {

    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-none' layout='fill' src={ViPng} alt='/' unoptimized={true} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
                    <h2 className='py-2'>ViFitness mobile application</h2>
                    <h3>Kotlin / Firebase / openAI</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p >Projets</p>
                    <h2>Aperçu</h2>
                    <p className='mt-4' >VI est une application mobile innovante conçue avec Kotlin, SQL, Firebase, openAI & plus. Cette application est destinée aux personnes souhaitant suivre un entraînement pour atteindre leurs objectifs de fitness. Elle offre aux utilisateurs différentes fonctionnalités, comme un chatbot, un outil de suivi des repas et l'accès à Google Maps.
                        Les utilisateurs peuvent s'abonner à un entraînement créé par un coach. Une fois qu'ils sont abonnés, ils peuvent suivre leur progression en temps réel et se désabonner de l'entraînement à tout moment. L'application fournit également des informations sur les mouvements et les aliments à consommer pour maintenir une santé optimale.
                        VI est une application facile à utiliser dotée d'une interface intuitive et d'une technologie de pointe. Elle offre aux utilisateurs une expérience personnalisée et permet aux coachs de fournir des conseils personnalisés pour les aider à atteindre leurs objectifs de fitness.</p>
                    <button className='px-8 py-2 mt-4 mr-8'
                        onClick={() => setShowModal(true)}>Demo</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Kotlin</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> SQL, mssql</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Firebase</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Openai</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> API (json)</p>
                        <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill /> Node.js</p>
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center rounded-lg bg-slate-300mt-14 align-bottom overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-36"
                    >
                        <div className=" relative bg-slate-100 rounded-lg w-auto my-6 mx-auto max-w-3xl shadow-xl shadow-gray-400">
                            {/*content*/}
                            <div className="border-0 rounded-lg relative flex flex-col w-full shadow-xl outline-none focus:outline-none">
                                {/*body*/}
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black mt-4">Démonstration</h2>
                                <div className=" px-2 mt-2 rounded-lg border-">

                                    <Image src={Vigif} alt='/' />
                                </div>
                                {/*footer*/}
                                <button
                                    className="text-red-500  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-2"
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

export default Vi